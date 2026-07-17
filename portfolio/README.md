# MJ Chaker — Personal Website

A self-contained static portfolio site: no build step, no dependencies. Open
`index.html` in a browser, or deploy the `portfolio/` folder to any static
host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Structure

- `index.html` — all content and structure
- `styles.css` — theming (dark/light), layout, animations
- `script.js` — theme toggle + scroll-reveal animations
- `assets/favicon.svg` — site favicon

## Personalizing

Search `index.html` for `TODO` comments:

1. **Social links** — replace `YOUR_HANDLE` in the Instagram and X links
   (they appear in both the hero and the footer).
2. **Projects** — swap the "Project Two" / "Project Three" placeholder cards
   for your real work, with links and outcome-focused blurbs.
3. **Music** — either drop MP3s into `assets/` (named `track-one.mp3` /
   `track-two.mp3`) for the built-in players, or paste a Spotify/SoundCloud
   embed `<iframe>` into the `.embed-slot` divs. Point the Spotify /
   SoundCloud / Bandcamp buttons at your artist profiles.

## Deploying to GitHub Pages

From the repo settings, enable Pages and serve from this branch with the
`/portfolio` folder as the source — or copy this folder into its own repo
named `<username>.github.io`.
