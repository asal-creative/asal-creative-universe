# ASAL — Creative Universe

A responsive, pastel clay-inspired personal creative portfolio starter.

## What's included
- English one-page portfolio: About, Music, AI Creations, Projects, Gallery, Contact
- Responsive mobile navigation
- Claymorphism-inspired cards and illustrations made with CSS
- Interactive demo music control (visual demo only; no audio file is included)
- Creator setup information dialog
- GitHub Pages-ready static files

## Preview locally
Open `index.html` in a browser.

## Publish with GitHub Pages
1. Create a GitHub repository named `asal-creative-universe`.
2. Upload `index.html`, `styles.css`, `script.js`, and this README.
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/root`, then Save.
5. Wait for GitHub Pages to publish the site and use the URL shown in Settings → Pages.

You can also import the repository into Vercel for deployment.

## Important security note
This is a public-facing front-end prototype. It does **not** include a real administrator login, secure uploads, database, or private media storage. A password placed in front-end JavaScript/HTML would be visible to visitors and is not secure.

Before enabling private uploads or editing, connect a trusted backend with:
- server-side authentication (only your administrator account)
- authorization checks on every upload/edit/delete operation
- private storage with appropriate access rules
- secret keys stored only as server-side environment variables

Do not upload passwords, API keys, private contact details, or unreleased sensitive files to a public repository.

## Personalize it
- Replace `hello@example.com` in `index.html` with an email address you intentionally want to publish.
- Replace placeholder text and project cards with your own work.
- Real music playback can be added by connecting an audio file and an accessible player.
- A background image picker and secure content-management dashboard can be added after the backend is chosen.
