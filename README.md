# JARVIS Official Website — Preview

A responsive, static futuristic landing page for the JARVIS Windows assistant. It uses plain HTML, CSS, and JavaScript, so no build tools are needed.

## Preview locally

1. Extract this folder.
2. Double-click `index.html` to open it in your browser.
3. Edit the text in `index.html` and styling in `style.css` as needed.

## Publish free with GitHub Pages

1. Create/sign in to a GitHub account.
2. Create a **public** repository, for example `jarvis-website`.
3. Upload `index.html`, `style.css`, and `script.js` to the repository root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then Save.
7. Wait for GitHub Pages to publish the site. The Pages panel will show the actual URL.

Do not upload `.env` files, API keys, personal data, or your Windows project folder to a public website repository.

## Before public release

- Replace preview copy and the placeholder version with the real release details.
- Upload a real package only after it is built and tested.
- Keep the download button disabled until the real package URL is configured.
- Configure a versioned update manifest and secure package verification in the Windows updater.
- Use HTTPS. For a robust updater, verify a cryptographic signature (not only a hash supplied by the same server) before installing.
- Keep a rollback copy and stage files outside the running app directory.

## Important

This is the **website frontend only**. It does not yet publish a JARVIS installer or provide a working auto-update service. The update panel intentionally says the updater is not connected so visitors are not misled.
