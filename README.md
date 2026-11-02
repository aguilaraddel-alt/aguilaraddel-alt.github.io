# Addel Aguilar — Student Portfolio

A mobile-first student portfolio built with semantic HTML5, CSS3, and vanilla JavaScript. It introduces Addel Aguilar, describes coursework topics, and presents three explicitly labeled sample project concepts.

## Features

- Home, About Me, Skills, Projects, and Contact sections with working anchor navigation.
- Collapsible phone navigation, keyboard Escape handling, visible focus, and a skip link.
- Responsive Grid and Flexbox layouts and a structured skills table.
- Light/dark theme control with an initial system-preference match.
- Filterable gallery rendered from an array of objects after a JSON serialization round-trip.
- Local contact-form validation with field-specific errors and success feedback. The form does not transmit or save messages.
- Reduced-motion support and descriptive page metadata.

## Run locally

Open `index.html` in a modern browser, or serve this directory with a local static web server. No build step, package installation, API key, or external library is needed.

## Files

`index.html` contains the semantic structure and form. `style.css` contains mobile-first styling and larger-screen enhancements. `script.js` implements navigation, theme control, project rendering, filtering, and form validation. `images/` contains three original, clearly labeled concept diagrams in optimized JPG format. `wireframes/` contains the low- and high-fidelity homepage designs, also in JPG format.

## Current verification

The initial local version was checked in the in-app browser at viewport widths of 375, 768, and 1280 pixels. None produced horizontal page overflow. Keyboard menu open/close, project filtering, empty-form errors, valid-form feedback, reset, and theme switching were exercised. The published site was also checked in Google Chrome. See `documentation/performance_report.pdf` for the test scope and limitations.

PageSpeed Insights on November 1, 2026 returned mobile scores of 86 performance, 100 accessibility, 100 best practices, and 100 SEO. Desktop scored 100 in all four categories. Mobile layout shift remains an identified improvement opportunity. These automated results do not replace the pending human usability study.

## Deployment status

GitHub Repository URL: https://github.com/aguilaraddel-alt/aguilaraddel-alt.github.io

Published Website URL: https://aguilaraddel-alt.github.io/

The website is published through GitHub Pages from the `main` branch and `/(root)`. The live homepage and all three project JPGs were verified after deployment. The repository's supporting documentation is still being completed.

## Remaining deliverables

JPG assets, both wireframes, and the performance PDF are prepared. All three gallery images loaded successfully in the browser, and filtering preserved the correct cloud-project image. The usability PDF awaits real participant observations. Remaining supporting-file uploads and the final Canvas ZIP are pending. Do not treat this development version as a completed submission.
