# MicrobeQuest: The Outbreak Files

MicrobeQuest is an interactive microbiology learning project built around outbreak investigation, scientific evidence, and public-health concepts. It was developed for the BTY323 Microbiology course.

**Live site:** https://anubhutigoswami125.github.io/MicrobeQuest/  
**Repository:** https://github.com/anubhutigoswami125/MicrobeQuest  
**Secondary deployment:** https://microbequest-the.hatchable.site/

## Features

- Six investigation stages aligned with the course's six microbiology units
- Opening comic sequence and interactive guided tour
- Evidence Room with clickable clues, a timeline, a hypothesis selector, and feedback
- Outbreak case material linked to public-health sources
- Registration and consent interface
- Project credits, privacy policy, and terms pages

The interface uses an outbreak-archive style with layered dossiers, field notes, forest greens, and incident-warning colors.

## Technology

- HTML
- CSS
- Vanilla JavaScript
- GitHub Pages for the primary static site
- Hatchable for a separate deployment with server-side features

## Run locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Serve `index.html` with the Live Server extension or another local static server.
4. Open the local address in a browser.

The static version does not require a package installation or build step.

## Hosting and data

The GitHub Pages version is a static site. Registration details and learning activity are stored in the visitor's browser using local storage; they are not sent to the project owner, and they do not appear in Hatchable's analytics. GitHub Pages does not run the API routes or database available in the separate Hatchable deployment.

To publish through GitHub Pages, open **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and the `/(root)` folder, and save. Allow time for the deployment to finish.

## Scientific scope

This is an educational project, not a diagnostic tool or a substitute for supervised laboratory training. Case material is simplified for learning. Real outbreak investigations require appropriate methods, controls, biosafety procedures, and careful interpretation of primary sources.

## Sources and corrections

Case material links to public-health resources, including CDC and WHO publications. To report a bug, accessibility issue, or scientific-content correction, open a [GitHub Issue](https://github.com/anubhutigoswami125/MicrobeQuest/issues).
