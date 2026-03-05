/**
 * Cloudflare Worker for Yichuhui Website
 * Serves static files with proper headers and routing
 */

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;

      // Check if ASSETS binding exists
      if (!env || !env.ASSETS) {
        // Return debug info for development
        return new Response('ASSETS binding not available in dev mode. Please use wrangler pages dev instead.', {
          status: 500,
          headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
        });
      }

      // Try to get the asset from env.ASSETS
      const asset = await env.ASSETS.fetch(request);

      // If asset found, return it with security headers
      if (asset.status !== 404) {
        return addSecurityHeaders(asset);
      }

      // Handle paths without extension (try to serve .html file)
      if (!path.includes('.')) {
        const htmlPath = path.endsWith('/') ? `${path}index.html` : `${path}.html`;
        const htmlUrl = new URL(htmlPath, url);
        const htmlRequest = new Request(htmlUrl, request);
        const htmlAsset = await env.ASSETS.fetch(htmlRequest);

        if (htmlAsset.status !== 404) {
          return addSecurityHeaders(htmlAsset);
        }
      }

      // Asset not found, return 404 page
      try {
        const notFoundRequest = new Request(new URL('/404.html', url), request);
        const notFoundAsset = await env.ASSETS.fetch(notFoundRequest);

        if (notFoundAsset.status !== 404) {
          const newResponse = new Response(notFoundAsset.body, notFoundAsset);
          newResponse.headers.set('Content-Type', 'text/html;charset=UTF-8');
          addSecurityHeadersToResponse(newResponse);
          return new Response(newResponse.body, {
            status: 404,
            headers: newResponse.headers
          });
        }
      } catch (e) {
        console.error('Error fetching 404 page:', e);
      }

      // Return simple 404
      return new Response('404 Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      });

    } catch (error) {
      console.error('Error serving request:', error);
      return new Response(`Internal Server Error: ${error.message}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8'
        }
      });
    }
  }
};

/**
 * Add security headers to response (returns new Response object)
 */
function addSecurityHeaders(response) {
  const newResponse = new Response(response.body, response);

  // Copy existing headers
  response.headers.forEach((value, key) => {
    newResponse.headers.set(key, value);
  });

  // Add security headers
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('X-XSS-Protection', '1; mode=block');
  newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  return newResponse;
}

/**
 * Add security headers to existing response object
 */
function addSecurityHeadersToResponse(response) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
}



