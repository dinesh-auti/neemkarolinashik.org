/**
 * Forms proxy — spam-resistant relay for neemkarolinashik.org form submissions.
 *
 * The site POSTs form data here (instead of straight to FormSubmit). This Worker:
 *   1. drops submissions that trip the hidden honeypot (_gotcha),
 *   2. verifies the Cloudflare Turnstile token (real human check),
 *   3. only then forwards the message to your inbox via FormSubmit.
 *
 * Your email address lives ONLY in this Worker's config (FORM_TARGET) — never in
 * the public page source. Free tier: Workers 100k req/day, Turnstile unlimited.
 *
 * Env needed (set in the dashboard / wrangler):
 *   TURNSTILE_SECRET  — secret  (from your Turnstile widget)
 *   FORM_TARGET       — var     e.g. "auti.dinesh3@gmail.com"
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: CORS });
    }

    const form = await request.formData();

    // 1) Honeypot — a real person never fills this hidden field. Pretend success so
    //    the bot moves on, but never forward it.
    if (form.get('_gotcha')) {
      return Response.json({ success: true }, { headers: CORS });
    }

    // 2) Turnstile verification
    const token = form.get('cf-turnstile-response');
    const ip = request.headers.get('CF-Connecting-IP') || '';
    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token || '', remoteip: ip }),
    }).then((r) => r.json()).catch(() => ({ success: false }));

    if (!verify.success) {
      return Response.json({ success: false, error: 'verification-failed' }, { status: 400, headers: CORS });
    }

    // 3) Forward the real message to FormSubmit (email stays server-side)
    const fwd = new FormData();
    for (const [k, v] of form) {
      if (k === 'cf-turnstile-response' || k === '_gotcha') continue;
      fwd.append(k, v);
    }
    const res = await fetch(`https://formsubmit.co/ajax/${env.FORM_TARGET}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: fwd,
    });
    const body = await res.text();
    return new Response(body, {
      status: res.status,
      headers: { ...CORS, 'content-type': 'application/json' },
    });
  },
};
