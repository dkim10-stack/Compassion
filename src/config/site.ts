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
  email: 'hello@example.org',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Donate', href: '/donate' },
];
