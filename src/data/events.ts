// Sacred days through the year. Festival dates follow the Hindu lunar calendar
// and shift each year — update these annually (current: 2026).
// `community: true` marks days special to our satsang / Maharaj-ji.

export interface SacredDay {
  date: string;        // ISO date for the current year
  title: string;
  note: string;
  community?: boolean;
}

export const CALENDAR_YEAR = 2026;

export const SACRED_DAYS: SacredDay[] = [
  { date: '2026-01-14', title: 'Makar Sankranti', note: 'The sun turns north — a day of new light, gratitude and giving.' },
  { date: '2026-03-04', title: 'Holi', note: 'The festival of colour and the play of divine love.' },
  { date: '2026-03-26', title: 'Ram Navami', note: 'The birth of Lord Ram — whom Hanuman serves with his whole heart.' },
  { date: '2026-04-02', title: 'Hanuman Jayanti', note: 'The appearance day of Hanuman-ji — sung with special joy in our satsang.', community: true },
  { date: '2026-06-15', title: 'Kainchi Dham Bhandara', note: 'Foundation day of Maharaj-ji’s Kainchi Dham (1964). Thousands are fed.', community: true },
  { date: '2026-07-29', title: 'Guru Purnima', note: 'The day to bow to the guru who lights the way home.', community: true },
  { date: '2026-08-15', title: 'Krishna Janmashtami', note: 'The birth of Sri Krishna at midnight — kirtan and joy.' },
  { date: '2026-09-11', title: 'Maharaj-ji’s Mahasamadhi', note: 'The day Neem Karoli Baba left his body, 1973 — remembered with kirtan and seva.', community: true },
  { date: '2026-10-19', title: 'Dussehra · Vijayadashami', note: 'Ram’s victory over Ravan — the triumph of light over darkness.' },
  { date: '2026-11-08', title: 'Diwali', note: 'The festival of lights; a lamp lit in every home and heart.' },
];
