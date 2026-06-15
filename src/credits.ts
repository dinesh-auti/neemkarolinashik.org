// Every image and text we borrow is credited here, and on /credits/.
// Maharaj-ji taught us to tell the truth — that includes saying where things come from.

export interface CreditGroup {
  title: string;
  source: string;
  href: string;
  license: string;
  note?: string;
}

export const CREDITS: CreditGroup[] = [
  {
    title: 'Photographs of Sri Neem Karoli Baba',
    source: 'Durgamayi Ma Ashram e.V. (ashram.de)',
    href: 'https://ashram.de/en/neem-karoli-baba',
    license: '© Durgamayi Ma Ashram e.V.',
    note: 'The historic photographs of Maharaj-ji are gratefully reproduced from the Durgamayi Ma Ashram’s collection. All rights remain with them.',
  },
  {
    title: 'The reading portrait of Maharaj-ji',
    source: 'Love Serve Remember Foundation (ramdass.org)',
    href: 'https://www.ramdass.org/',
    license: '© Love Serve Remember Foundation',
  },
  {
    title: 'Ram Darbar & Hanuman lithographs',
    source: 'Raja Ravi Varma / Ravi Varma Press, via Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/Category:Paintings_by_Raja_Ravi_Varma',
    license: 'Public domain',
    note: 'Classic lithographs by Raja Ravi Varma (1848–1906) and the Ravi Varma Press, now in the public domain.',
  },
  {
    title: 'Devotional Hanuman paintings (dancing, Panchamukhi & other forms)',
    source: 'Traditional Tanjore & Pattachitra devotional art, shared by a devotee',
    href: '/hanuman-ji/',
    license: 'Shared in devotion',
    note: 'These are traditional bazaar/Tanjore and Pattachitra-style devotional images of Hanuman, contributed for the satsang. If you are a rights-holder, please write to us and we will credit or remove them at once.',
  },
  {
    title: 'Photograph of Ram Dass',
    source: 'Joan Halifax, via Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/File:Ram_Dass.jpg',
    license: 'CC BY 2.0',
  },
  {
    title: 'Photograph of Krishna Das',
    source: 'Ken Wieland, via Wikimedia Commons',
    href: 'https://commons.wikimedia.org/wiki/File:Krishna_Das.jpg',
    license: 'CC BY-SA 2.0',
  },
  {
    title: 'Hanuman Chalisa (PDF)',
    source: 'Love Serve Remember Foundation (ramdass.org)',
    href: 'https://www.ramdass.org/',
    license: 'Reproduced for devotional use',
  },
  {
    title: 'Biographical & historical details (Maharaj-ji, the people)',
    source: 'Wikipedia and devotees’ published memoirs',
    href: 'https://en.wikipedia.org/wiki/Neem_Karoli_Baba',
    license: 'Reference',
    note: 'Life facts and the accounts of devotees (Ram Dass, Krishna Das, Larry Brilliant, Dada Mukerjee and others) draw on Wikipedia and their own books and talks.',
  },
  {
    title: 'Kainchi Dham travel details',
    source: 'Public Uttarakhand travel guides',
    href: 'https://visituttarakhand.org/how-to-travel-from-delhi-to-kainchi-dham/',
    license: 'Reference',
    note: 'Distances, routes and approximate fares on the Yatra page are compiled from publicly available travel guides; please reconfirm before travelling.',
  },
];

// Baba photo gallery — used on the home "darshan" band and elsewhere.
// `pos` is the object-position so each crop centres on his face.
export const BABA_PHOTOS = [
  { src: '/images/baba/laughing.jpg', alt: 'Maharaj-ji laughing, garlands of marigold behind him', pos: '50% 28%' },
  { src: '/images/baba/prasad.jpg', alt: 'Maharaj-ji being offered fruit — prasad', pos: '46% 24%' },
  { src: '/images/baba/flower.jpg', alt: 'Maharaj-ji holding a rose, wrapped in his plaid blanket', pos: '50% 16%' },
  { src: '/images/baba/surrounded.jpg', alt: 'Maharaj-ji walking among devotees, Indian and Western', pos: '50% 26%' },
  { src: '/images/baba/mudra.jpg', alt: 'Maharaj-ji reclining on a takht', pos: '26% 34%' },
  { src: '/images/baba/cushion.jpg', alt: 'Maharaj-ji seated on a cushion', pos: '50% 28%' },
];

// The medallion row in the hero (face-centred circular crops).
export const HERO_MEDALLIONS = [
  { src: '/images/baba/laughing.jpg', alt: 'Maharaj-ji laughing', pos: '50% 28%' },
  { src: '/images/baba/flower.jpg', alt: 'Maharaj-ji with a rose', pos: '52% 16%' },
  { src: '/images/baba/portrait.jpg', alt: 'Maharaj-ji smiling', pos: '50% 30%' },
  { src: '/images/baba/prasad.jpg', alt: 'Maharaj-ji receiving prasad', pos: '46% 22%' },
  { src: '/images/baba/cushion.jpg', alt: 'Maharaj-ji seated', pos: '50% 28%' },
];
