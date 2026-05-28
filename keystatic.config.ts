import { collection, config, fields } from '@keystatic/core';

const githubRepo =
  (import.meta.env.PUBLIC_KEYSTATIC_GITHUB_REPO as string | undefined) ??
  'PhoenixKuzia/mia-website';

// Local in dev; GitHub on any production deploy (Vercel has no writable local files).
const storage = import.meta.env.PROD
  ? { kind: 'github' as const, repo: githubRepo as `${string}/${string}` }
  : { kind: 'local' as const };

export default config({
  storage,
  ui: {
    brand: { name: 'MIA Blog' },
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        description: fields.text({ label: 'Beschreibung', multiline: true }),
        image: fields.image({
          label: 'Bild',
          directory: 'src/assets/images/uploads',
          publicPath: '/assets/images/uploads/',
        }),
        date: fields.date({ label: 'Veröffentlicht am', defaultValue: { kind: 'today' } }),
        draft: fields.checkbox({ label: 'Entwurf', defaultValue: true }),
        content: fields.mdx({
          label: 'Inhalt',
          extension: 'md',
          options: {
            bold: true,
            italic: true,
            heading: { levels: [2, 3, 4] },
            link: true,
            orderedList: true,
            unorderedList: true,
            blockquote: true,
          },
        }),
      },
    }),
  },
});
