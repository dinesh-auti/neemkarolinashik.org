// Shared site constants — edit these in one place.

export const SITE = {
  name: 'Neem Karoli Baba — Nashik',
  shortName: 'NKB Nashik',
  url: 'https://neemkarolinashik.org',
  tagline: 'A satsang of love, service & remembrance in Nashik',
  description:
    'A growing community of Neem Karoli Baba devotees in Nashik. Join our weekly Tuesday aarti, learn Maharaj-ji’s life and teachings, and help lay the foundation for a dham in Nashik.',
};

// The weekly gathering
export const AARTI = {
  day: 'Every Tuesday',
  time: '6:00 PM',
  note: 'An informal, heartfelt aarti & satsang. All are welcome.',
  venue: 'Matrudarshan',
  address: '1, Matrudarshan, above Zero Degree (next to Laxmi Plywood), opp. Vasant Market, Canada Corner, Nashik 422005',
  // Google Maps search link for directions
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Matrudarshan%2C%20Canada%20Corner%2C%20Nashik%20422005',
};

// How people connect.
export const CONNECT = {
  // WhatsApp group invite link (admins can reset it anytime in Group info).
  whatsapp: 'https://chat.whatsapp.com/FuXPWq3gU7VCpjNDAaNhT8',
  // Contact phone (shown publicly; also used for tel: and wa.me links).
  phone: '+91 99609 00646',
  phoneRaw: '919960900646',
  // Forms POST to our Cloudflare Worker, which verifies a Turnstile (human) token,
  // drops honeypot/bot submissions, and forwards real messages to the inbox via
  // FormSubmit. The email address lives only in the Worker — never in page source.
  // (see /cloudflare/forms-proxy/README.md)
  formEndpoint: 'https://nkb-forms-proxy.auti-dinesh3.workers.dev',
  // Cloudflare Turnstile public site key (renders the human-check on each form).
  turnstileSiteKey: '0x4AAAAAADk82Oaz5LuBOlj4',
  // Global "lamps lit" counter — Cloudflare Worker (see /cloudflare/lamp-counter/README.md).
  // Leave '' to fall back to a local-only count.
  lampApi: 'https://nkb-lamp-counter.auti-dinesh3.workers.dev',
};

export const NAV = [
  { label: 'Maharaj-ji', href: '/maharaj-ji/' },
  { label: 'Hanuman-ji', href: '/hanuman-ji/' },
  { label: 'People', href: '/people/' },
  { label: 'Satsang', href: '/satsang/' },
  { label: 'Yatra', href: '/yatra/' },
  { label: 'Stories', href: '/stories/' },
  { label: 'Resources', href: '/resources/' },
];

// The Hanuman Chalisa PDF lives in /public/downloads/
export const CHALISA_PDF = '/downloads/hanuman-chalisa.pdf';

// The four words at the heart of Maharaj-ji's teaching
export const TEACHINGS = [
  { en: 'Love everyone', hi: 'सबसे प्रेम करो' },
  { en: 'Serve everyone', hi: 'सबकी सेवा करो' },
  { en: 'Feed everyone', hi: 'सबको भोजन कराओ' },
  { en: 'Remember God', hi: 'राम का स्मरण करो' },
];
