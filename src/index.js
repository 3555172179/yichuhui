// Cloudflare Workers Entry Point
// Serves static files from the public directory

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Serve static files
    try {
      // Try to get the asset from the public directory
      let filePath = path === '/' ? '/index.html' : path;

      // Check if the path has no extension, try adding .html
      if (!path.includes('.')) {
        filePath = `${path}.html`;
      }

      // Try to serve the file
      const response = await env.ASSETS.fetch(new Request(filePath, request));

      if (response.status === 404) {
        // Return 404 page
        return new Response(await env.ASSETS.fetch(new Request('/404.html', request)), {
          status: 404,
          headers: {
            'Content-Type': 'text/html;charset=UTF-8',
          }
        });
      }

      // Add security headers
      const newResponse = new Response(response.body, response);
      newResponse.headers.set('X-Content-Type-Options', 'nosniff');
      newResponse.headers.set('X-Frame-Options', 'DENY');
      newResponse.headers.set('X-XSS-Protection', '1; mode=block');
      newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

      return newResponse;
    } catch (error) {
      console.error('Error serving asset:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};
