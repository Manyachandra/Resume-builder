# Resume Builder

An interactive, browser-based resume builder for generating clean, shareable resumes from structured inputs.

## Overview
Resume-builder lets users enter personal details, education, experience, and skills, then previews a formatted resume in real time. The UI supports adding multiple education and experience entries, toggling skills, and exporting/downloading the result.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Responsive UI

## Features
- Live resume preview while editing
- Add multiple education and experience entries
- Skill selection with checkboxes
- Clear and download actions for quick output reuse
- Simple style with no external build dependencies

## Getting Started
```bash
# Option 1: open directly
open index.html

# Option 2: serve via a static server
npx serve .
# or
python3 -m http.server 8080
```

## Project Structure
```
├── index.html
├── style.css
├── script.js
└── README.md
```

## Usage
1. Fill in name, email, phone, and profile summary.
2. Add education and experience entries.
3. Select relevant skills.
4. Use **Clear** to reset, or **Download PDF** to export the resume.

## License
MIT

**Author:** Manya Chandra <manyachandra@proton.me>
