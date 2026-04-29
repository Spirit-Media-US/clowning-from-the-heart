export const siteName = 'Clowning from the Heart';
export const siteUrl = 'https://clowningfromtheheart.com';
export const defaultTitle = 'Clowning from the Heart — One Smile at a Time';
export const defaultDescription =
  'The true story of Cindy Love\'s unexpected calling to become Sparkle, a gospel clown who brought joy, hope, and God\'s love into hospitals, schools, and places marked by pain.';

export const amazonUrl = 'https://www.amazon.com/Clowning-Heart-One-Smile-Time/dp/B0GN8JGRPM';

export const ogImage = 'https://cdn.sanity.io/images/zvhqn0sn/production/413ca0226d1dfa92f70f5ba6849f3a7e84bd2f18-768x1045.webp';

// Hero LCP assets are self-hosted on R2 (same origin as fonts) for 100 Club perf.
// Stable URLs enable 103 Early Hints. To change these, re-upload matching WebPs to
// s3://smp/clowning-from-the-heart/<name>.webp
const r2 = 'https://assets.spiritmediapublishing.com/clowning-from-the-heart';

// Below-fold images stay on Sanity CDN (don't affect LCP).
const headshotBase = 'https://cdn.sanity.io/images/zvhqn0sn/production/41a09e4b87cbb7de8f851e987d90e1dcb45155a9-640x610.jpg';

export const images = {
  // Hero responsive background — 3 sizes on R2
  heroBackgroundSm: `${r2}/hero-bg-sm.webp`,
  heroBackgroundMd: `${r2}/hero-bg-md.webp`,
  heroBackgroundLg: `${r2}/hero-bg-lg.webp`,
  // Book mockup (LCP img) — 3 sizes on R2
  bookMockupSm: `${r2}/book-mockup-sm.webp`,
  bookMockup: `${r2}/book-mockup-md.webp`,
  bookMockupLg: `${r2}/book-mockup-lg.webp`,
  // Below-fold — Sanity CDN is fine
  reviewBackground: 'https://cdn.sanity.io/images/zvhqn0sn/production/bb0672461fb970d6b3a5a93f6e5d67cb94aeb9f4-1920x1080.webp?w=1200&fm=webp&q=70',
  headshot: `${headshotBase}?w=640&fm=webp&q=80`,
  amazonButton: 'https://cdn.sanity.io/images/zvhqn0sn/production/3345b64a930065cb945a5f24b67a33446f4c26d5-300x111.png?w=350&fm=webp&q=80',
};
