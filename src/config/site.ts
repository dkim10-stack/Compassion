// ─────────────────────────────────────────────────────────────
//  Site-wide settings. Edit these to rebrand the whole site.
// ─────────────────────────────────────────────────────────────

export const site = {
  /** Organization name — shown in the header and the home page hero. */
  name: 'Compassion Review',

  /** Short motto shown under the name on the home page. */
  motto: 'Analyzing Crisis, Amplifying Hope',

  /** Used for the page <meta name="description">. */
  description:
    'Compassion Review is a student-led awareness and advocacy initiative shedding light on global humanitarian crises and fundraising for Compassion Korea’s child-development programs.',

  /**
   * Path to your logo inside /public (e.g. '/logo.png').
   * Leave as null to show the placeholder circle.
   */
  logo: '/logo.png' as string | null,

  /** Contact email shown in the footer. */
  email: 'compassionreview@gmail.com',

  /** Instagram username shown in the footer (without the @). */
  instagram: 'compassion_review',

  /** Link for the "Join as a Member Now!" section on the home page. */
  memberFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdPU5H0ZSjeFHLw9BMSc-wPtvFXCz5kFngqcgIwNMFCrH1C5Q/viewform?usp=sharing&ouid=104648732044560223408',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Donate', href: '/donate' },
];
