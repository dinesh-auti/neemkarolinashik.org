# Lamp counter — Cloudflare Worker (free tier)

A ~25-line Worker that keeps the global "lamps lit" total for the site, stored in
one KV key. Free-tier limits (100k requests/day, 1,000 KV writes/day) are far beyond
what a satsang needs.

`GET` returns `{ count }`; `POST` increments and returns the new `{ count }`.

---

## Option A — Cloudflare dashboard (no tools, ~3 min)

1. **Workers & Pages → Create → Worker.** Name it `nkb-lamp-counter`. Deploy the
   starter, then **Edit code**, paste the contents of `worker.js`, and **Deploy**.
2. **Storage & Databases → KV → Create namespace.** Name it `lamps`.
3. Back in the Worker → **Settings → Bindings → Add → KV namespace.**
   - Variable name: **`LAMPS`**  ·  KV namespace: **lamps**  → Save & deploy.
4. Copy the Worker URL (e.g. `https://nkb-lamp-counter.<your-subdomain>.workers.dev`).
5. Paste it into `src/site.ts` → `CONNECT.lampApi`, then commit & push.

## Option B — Wrangler CLI

```bash
cd cloudflare/lamp-counter
npm i -g wrangler            # if needed
wrangler login
wrangler kv namespace create LAMPS     # copy the printed id into wrangler.toml
wrangler deploy                        # prints your Worker URL
```
Then paste the Worker URL into `src/site.ts` → `CONNECT.lampApi`.

---

## Optional — a tidy custom URL
In the Worker’s **Settings → Domains & Routes**, add a route like
`lamps.neemkarolinashik.org/*` (Cloudflare manages your DNS already), and use that
URL in `lampApi` instead of the `workers.dev` one.

## Notes
- CORS is open (`*`) so the static site can call it — fine for a public counter.
- The site only increments **once per visitor per day** (browser-gated), so the
  number grows from genuine offerings and stays well under free-tier write limits.
- If the Worker is ever unreachable, the diya still lights and falls back to a
  local (per-visitor) message — nothing breaks.
- The count starts at **0** (honest). If you’d like to seed a starting number,
  set the KV key `count` to that value in the dashboard.
