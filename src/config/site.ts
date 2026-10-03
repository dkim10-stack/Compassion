// ─────────────────────────────────────────────────────────────
//  Site-wide settings. Edit these to rebrand the whole site.
// ─────────────────────────────────────────────────────────────

export const site = {
  /** Organization name — shown in the header and the home page hero. */
  name: 'Compassion',

  /** Short motto shown under the name on the home page. */
  motto: 'Kindness in action, one neighbor at a time.',

  /** Used for the page <meta name="description">. */
  description:
    'Compassion is a student-led club dedicated to service, empathy, and building a kinder community.',

  /**
   * Path to your logo inside /public (e.g. '/logo.png').
   * Leave as null to show the placeholder circle.
   */
  logo: null as string | null,

  /** Contact email shown in the footer. */
  email: 'hello@example.org',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Donate', href: '/donate' },
];
