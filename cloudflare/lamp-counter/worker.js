/**
 * Lamp counter — a tiny global "lamps lit" tally for neemkarolinashik.org.
 *
 * GET  → { count }            returns the current total
 * POST → { count }            increments by one, returns the new total
 *
 * Storage: a single KV key ("count"). Runs comfortably on Cloudflare's FREE tier
 * (Workers: 100k req/day; KV: 100k reads + 1k writes/day) — far beyond a satsang's needs.
 *
 * Deploy: see README.md in this folder. Bind a KV namespace as `LAMPS`.
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS });
    }

    const KEY = 'count';

    if (request.method === 'POST') {
      const current = parseInt((await env.LAMPS.get(KEY)) || '0', 10);
      const next = current + 1;
      await env.LAMPS.put(KEY, String(next));
      return Response.json({ count: next }, { headers: CORS });
    }

    if (request.method === 'GET') {
      const count = parseInt((await env.LAMPS.get(KEY)) || '0', 10);
      return Response.json({ count }, { headers: CORS });
    }

    return new Response('Method not allowed', { status: 405, headers: CORS });
  },
};
