# MicrobeQuest: The Outbreak Files

**An interactive forensic-microbiology learning experience built around documented outbreaks, scientific evidence, and public-health investigation.**

**Live experience:** https://microbequest-the.hatchable.site/  
**Source repository:** https://github.com/anubhutigoswami125/MicrobeQuest

MicrobeQuest is a BTY323 Microbiology course project. It frames the learner as an investigator examining outbreak records, inspecting evidence, and deciding what conclusions the available data can—and cannot—support.

## Current live experience

The Hatchable deployment is the canonical, full version of MicrobeQuest. It includes:

- **An opening comic cutscene** that appears on every page load or refresh. It introduces the investigator role and outbreak alert.
- **A guided site tour** highlighted by an arrow and circle after the cutscene, so first-time visitors know where to begin.
- **Six microbiology investigation stages** mapped to the course's six units.
- **An interactive Evidence Room** with clickable evidence, a clue board, timeline, hypothesis selection, and feedback.
- **Documented outbreak files** linked to public-health sources, including CDC and WHO reports.
- **Registration and consent flow**, learning-activity tracking, and an administrative analytics endpoint in the Hatchable-hosted version.
- **Privacy and terms pages**, plus project credits and source links.

The visual direction is a maximalist outbreak archive: aged paper, field-dossier details, forest greens, incident red, warning yellow, and layered evidence-board elements.

## Repository and hosting notes

The GitHub Pages edition now mirrors the Hatchable site's front-end layout, styling, comic cutscene, guided tour, six-stage game, interactive Evidence Room, outbreak source links, credits, and legal pages. Because GitHub Pages serves static files only, it cannot run Hatchable's API routes, PostgreSQL database, or admin analytics. In the static edition, registration details and learning events are saved in the visitor's browser only; they are not sent to the project owner and do not appear in Hatchable analytics.

For the latest full experience, use the [live Hatchable site](https://microbequest-the.hatchable.site/). The repository's HTML, CSS, and JavaScript provide the static project source and can be opened locally.

## Run the static version locally

1. Clone or download this repository.
2. Open the repository folder in VS Code.
3. Use the Live Server extension, or another local static server, to serve `index.html`.
4. Open the local URL in your browser. A local server is recommended so relative links and browser storage behave consistently.

No package installation or build step is required for the static edition. Browser-local registration and progress require local storage to be enabled.

## GitHub Pages deployment

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and the `/(root)` folder, then save.
4. Wait for GitHub Pages to publish and display the site URL.

GitHub Pages cannot host the Hatchable database or API endpoints. Use Hatchable for the complete hosted workflow.

## Scientific scope and disclaimer

MicrobeQuest is an educational learning project, not a diagnostic tool or a substitute for supervised laboratory training. Case summaries are simplified for learning. Real investigations require appropriate methods, controls, biosafety procedures, and careful interpretation of the primary record.

When reviewing evidence, distinguish observations from interpretations, look for corroboration across independent evidence streams, and note limitations before making a claim.

## Technology

- HTML, CSS, and vanilla JavaScript
- GitHub Pages for the static edition
- Hatchable hosting, API routes, and PostgreSQL-backed data for the full live experience
- CDC and WHO public-health reports as source material

## Feedback

Report a bug, accessibility issue, or scientific-content correction through [GitHub Issues](https://github.com/anubhutigoswami125/MicrobeQuest/issues).
