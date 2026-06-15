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
  note: 'An informal, heartfelt aarti & satsang. All are welcome — simply ask to join.',
};

// How people connect. Replace the WhatsApp placeholder before launch.
export const CONNECT = {
  // Create a free WhatsApp community/group invite and paste the link here.
  whatsapp: 'https://chat.whatsapp.com/REPLACE_WITH_INVITE_CODE',
  // Forms POST here via FormSubmit.co (free, no signup — same as autisoftware.in).
  // Submissions are emailed to auti.dinesh3@gmail.com. The FIRST submission triggers
  // a one-time confirmation email to that address to activate the form.
  // To hide the address from page source later, swap in FormSubmit's random alias.
  formEndpoint: 'https://formsubmit.co/ajax/auti.dinesh3@gmail.com',
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
