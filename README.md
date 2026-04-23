# CodeAlpha_AgeCalculator

A simple, dark-themed web application that calculates a user's age in years, months, and days from a given date of birth.

---

## Features

- Calculates exact age in years, months, and days
- Input validation with clear error messages
- Clean, responsive dark UI
- Plain HTML, CSS, and JavaScript

---

## Project Structure

```
CodeAlpha_AgeCalculator/
├── index.html
├── README.md
├── Styles/
│   └── style.css
└── js/
    └── script.js
```

---

## Getting Started

No installation or build tools required.

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

```bash
git clone https://github.com/Orah-23/CodeAlpha_AgeCalculator.git
cd CodeAlpha_AgeCalculator
open index.html
```

---

## Usage

1. Enter your **day**, **month**, and **year** of birth into the calender field.
2. Click the **Calculate** button.
3. Your exact age will be displayed below the button.

---

## Validation

The application checks for the following before calculating:

- All fields must be filled in
- Day must be between 1 and 31
- Month must be between 1 and 12
- Year must be a valid 4-digit year and not in the future
- The date combination must be a real calendar date (e.g. 31 February is rejected)

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and dark theme |
| JavaScript (ES6) | Age calculation logic and validation |

---

## Browser Support

Works in all modern browsers including Chrome, Firefox, Edge, and Safari. No polyfills required.

---

## License

This project is intended for educational purposes. Feel free to use and modify it as needed.
