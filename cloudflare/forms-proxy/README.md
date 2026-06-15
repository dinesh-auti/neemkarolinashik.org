# Forms proxy — Turnstile spam protection (Cloudflare Worker, free)

Relays the site's form submissions through a human-check so bots can't spam your
inbox, and keeps your email out of the page source.

`POST` (form data + a Turnstile token) → verifies → forwards real messages to your
inbox via FormSubmit. Honeypot + Turnstile failures are dropped.

---

## Step 1 — Create a Turnstile widget (gives you a sitekey + secret)
1. Cloudflare dashboard → **Turnstile → Add widget**.
2. Name: `neemkarolinashik`; **Hostname:** `neemkarolinashik.org` (add `localhost` too for testing).
3. Widget mode: **Managed** (recommended — usually invisible).
4. Copy the **Site Key** (public) and **Secret Key** (private).

## Step 2 — Deploy the Worker

**Dashboard (no tools):**
1. **Workers & Pages → Create → Worker**, name `nkb-forms-proxy`, deploy, **Edit code**,
   paste `worker.js`, **Deploy**.
2. Worker → **Settings → Variables and Secrets**:
   - Add **Secret** `TURNSTILE_SECRET` = your Turnstile **secret key**.
   - Add **Variable** `FORM_TARGET` = `auti.dinesh3@gmail.com`.
   - Save & deploy.
3. Copy the Worker URL (`https://nkb-forms-proxy.<your-subdomain>.workers.dev`).

**Wrangler (alternative):**
```bash
cd cloudflare/forms-proxy
wrangler deploy
wrangler secret put TURNSTILE_SECRET     # paste the secret key
# set FORM_TARGET as a [vars] entry in wrangler.toml or a secret
```

## Step 3 — Tell me
Send me the **Worker URL** and the **Turnstile Site Key**. I'll point the forms at the
Worker and add the Turnstile widget, then push. (Your Gmail moves out of the page source.)

## Notes
- Free tier covers this comfortably.
- Turnstile "Managed" mode is usually invisible for real visitors; bots get challenged or blocked.
- If a submission ever fails verification, the visitor sees a gentle "please try again."
