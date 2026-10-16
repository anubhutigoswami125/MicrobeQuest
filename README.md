# MicrobeQuest — The Outbreak Files

**A microbiology investigation simulator built around scientific evidence, virtual experiments, and case-based learning.**

MicrobeQuest turns microbiology concepts into interactive investigations. Instead of only memorising facts, learners review scientific briefings, inspect evidence, consider limitations, and choose defensible next steps.

> **Project status:** Early prototype. Case 001 is playable; the remaining units are planned and will be developed incrementally.

## Learning approach

Each investigation follows three steps:

1. **Learn** — review a concise, syllabus-linked science briefing.
2. **Investigate** — interpret observations and evaluate the reliability of evidence.
3. **Explain** — make a decision and receive feedback about the scientific reasoning.

## Current features

- Responsive botanical scrapbook interface with paper textures, specimen labels, muted botanical greens, faded rose, and ink.
- First investigation on microscopy, Gram staining, controls, and evidence quality.
- Feedback explains why an answer is or is not supported.
- Local progress and score saved in the browser.
- No account or server required for the current prototype.

## Roadmap

- [x] Establish the visual design and navigation.
- [x] Build the first interactive case and evidence review.
- [ ] Add more decision points and branching evidence.
- [ ] Add a simulated growth/culture experiment.
- [ ] Develop cases for all six microbiology units.
- [ ] Add a final case report that separates observations, interpretations, and limitations.
- [ ] Test keyboard navigation, mobile layouts, legal pages, and scientific content.
- [ ] Review privacy and terms drafts against the final deployed site before launch.

## Syllabus map

| Unit | Focus |
| --- | --- |
| I | Microbiology foundations, cell structure, microscopy |
| II | Microbial diversity, culture media, growth phases |
| III | Respiration, fermentation, microbial metabolism |
| IV | Transformation, conjugation, transduction, plasmids, transposons |
| V | Environmental microbes and microbial interactions |
| VI | Sterilisation, disinfection, therapeutic agents, antimicrobial resistance |

## Run locally

This is a static site built with HTML, CSS, and vanilla JavaScript. No package installation or build step is needed.

1. Download or clone this repository.
2. Open `index.html` in a browser, or serve the folder with a local static server.
3. For the best test of browser storage and relative paths, use a local server such as VS Code Live Server.

## Deploy with GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)` folder, then save.
5. Wait for GitHub Pages to publish the site. The URL will appear in the Pages settings.

The site is designed for GitHub Pages and does not require a backend for its current features. Browser-saved progress is local to that browser and device; it is not shared across devices or users.

## Privacy and terms

Draft pages are provided at [`privacy.html`](privacy.html) and [`terms.html`](terms.html). They describe the current prototype and must be checked against the actual deployed configuration before launch. If analytics, forms, accounts, embedded content, or other third-party services are added, review and update the policies before releasing those features.

## Scientific scope and disclaimer

MicrobeQuest is an educational learning project, not a diagnostic tool or substitute for supervised laboratory training. Case data are simplified for teaching. In real microbiology work, results must be interpreted with appropriate methods, controls, and laboratory safety procedures.

Scientific explanations will be refined as more cases are added. If you spot an error or have a suggestion, open a GitHub issue with the relevant case and claim.

## Technology

- HTML
- CSS
- Vanilla JavaScript
- Browser `localStorage`
- GitHub Pages (static hosting)

## Contributing and feedback

Bug reports, accessibility suggestions, and science-content corrections are welcome through [GitHub Issues](https://github.com/anubhutigoswami125/MicrobeQuest/issues).

## Credits

Created as a student-built educational project to make microbiology more interactive and evidence-driven.
