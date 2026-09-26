# Resume Builder

<div align="center">

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-active-green)
![Tech: HTML/CSS/JS](https://img.shields.io/badge/tech-HTML%2FCSS%2FJS-orange)

An interactive, browser-based resume builder for generating clean, shareable resumes from structured inputs.

[Features](#features) | [Getting Started](#getting-started) | [Usage](#usage) | [Project Structure](#project-structure) | [Contributing](#contributing) | [License](#license)

</div>

## Overview

Resume-builder lets users enter personal details, education, experience, and skills, then previews a formatted resume in real time. The UI supports adding multiple education and experience entries, toggling skills, and exporting the result via print-to-PDF.

Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies.

## Features

- **Live resume preview** — the preview panel updates as you type
- **Multiple entries** — add any number of education and experience items dynamically
- **Skill selection** — toggle skills via checkboxes (HTML, CSS, JavaScript, React)
- **Clear & export** — reset the form or download your resume via the browser's print dialog
- **Responsive layout** — side-by-side on desktop, stacked on mobile
- **Zero dependencies** — no npm, no build tools, no external libraries

## Getting Started

No installation required. Open the project and start building your resume.

### Option 1: Open directly

Double-click `index.html` or open it in any modern browser.

### Option 2: Serve via a static server

```bash
# Using npx (requires Node.js)
npx serve .

# Using Python
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or the port shown by your server).

## Usage

1. **Fill in your details** — name, email, phone, and a profile summary.
2. **Add education** — click "+ Add Education" for each entry (e.g., "B.S. Computer Science, 2024").
3. **Add experience** — click "+ Add Experience" for each role (e.g., "Frontend Developer, Acme Corp").
4. **Select skills** — check the boxes that apply.
5. **Preview** — the right panel updates in real time as you type.
6. **Export** — click **Download PDF** to print / save as PDF, or **Clear** to start over.

### Progress indicator

A green progress bar at the top of the page shows how much of the form you have filled in, giving you a quick sense of completeness.

## Project Structure

```
resume-builder/
├── index.html    # Main page: form + preview layout
├── style.css     # All styles: layout, components, animations
├── script.js     # All logic: preview updates, dynamic fields, print
├── README.md     # This file
└── LICENSE       # MIT license
```

## Screenshots

| Form View | Preview Panel |
|-----------|---------------|
| Fill in your details, education, experience, and skills on the left. | The formatted resume preview updates live on the right. |

*(Add actual screenshots here when available.)*

## Configuration

No configuration files or environment variables are required. Everything runs client-side in the browser.

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and development process.

### Ideas for contributions

- Add more skill checkboxes (Python, TypeScript, etc.)
- Improve the print/PDF layout with custom `@media print` styles
- Add a dark mode toggle
- Support custom section headers
- Add a "copy to clipboard" button for the preview text

## License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

## Author

**Manya Chandra**
- GitHub: [@Manyachandra](https://github.com/Manyachandra)
- Email: manyachandra@proton.me

## Acknowledgments

- Built as a practical tool for generating clean, professional resumes without external dependencies.
- Inspired by the need for a simple, accessible resume builder that works entirely in the browser.
