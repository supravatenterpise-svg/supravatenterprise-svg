# supravatenterprise-svg

# BiteFlow - Mobile Food Ordering UI/UX Prototype

BiteFlow is a mobile app UI/UX design concept for a food delivery experience. The project is built as a static, interactive prototype that can be opened in a browser and used as a GitHub portfolio submission, Figma handoff reference, or ProtoPie-style animation demo.

## Project Objective

Design a mobile app UI in one of the suggested domains: fitness, finance, or food. This project chooses the food delivery domain and demonstrates a polished mobile ordering flow with micro-interactions and screen transitions.

## Live Prototype

Open the prototype from:

```text
outputs/index.html
```

No build step, package install, or account login is required. The prototype runs with plain HTML, CSS, JavaScript, and local SVG assets.

## Features

- Mobile-first food delivery interface
- Splash / brand reveal animation
- Home discovery screen with location, search, category chips, offer banner, and recommended meals
- Product detail screen with image, rating, description, favorite control, quantity stepper, and add-to-cart action
- Cart bottom sheet with item summary, delivery fee, total, and payment CTA
- Checkout confirmation modal
- Orders and profile tab states
- Custom SVG food artwork stored locally in `outputs/assets`
- Figma / Adobe XD handoff notes in `outputs/figma-handoff.md`

## Screens Included

1. Splash screen
2. Home / discovery screen
3. Food detail screen
4. Cart bottom sheet
5. Checkout confirmation modal
6. Orders tab
7. Profile tab

## Interaction Flow

1. The app starts with a BiteFlow splash animation.
2. The home screen displays food categories and recommended meals.
3. Selecting a food card opens the detail screen with a slide transition.
4. The quantity stepper updates the selected item price.
5. Add to cart triggers a small flying accent animation and cart badge bounce.
6. The cart opens as a bottom sheet.
7. Pay now shows an order confirmation modal.
8. Done resets the cart and returns the user to the app.

## Tech Stack

- HTML5 for structure
- CSS3 for layout, responsive design, and animation
- Vanilla JavaScript for interaction logic
- SVG for local food illustrations

## Folder Structure

```text
.
|-- README.md
|-- docs/
|   |-- CODE_EXPLANATION.md
|   |-- DESIGN_SYSTEM.md
|   |-- INTERACTIONS.md
|-- outputs/
|   |-- index.html
|   |-- app.js
|   |-- figma-handoff.md
|   |-- assets/
|       |-- garden-salad.svg
|       |-- market-pizza.svg
|       |-- spicy-bowl.svg
|       |-- sushi-set.svg
```

## How to Run

Option 1: Open directly

```text
outputs/index.html
```

Option 2: Run with a local static server

```bash
cd outputs
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Figma / Adobe XD Handoff

Use `outputs/figma-handoff.md` as the design handoff reference. It includes the target mobile frame size, grid, colors, typography guidance, screens, and interaction notes.

Recommended Figma setup:

- Frame: 390 x 844
- Grid: 4 columns
- Margin: 18 px
- Gutter: 12 px
- Card radius: 8 px
- Primary typeface: Inter or SF Pro

## Animation Notes

The prototype uses CSS transitions and lightweight JavaScript to simulate ProtoPie or After Effects micro-interactions:

- Splash reveal: scale and fade animation
- Detail screen: horizontal slide transition
- Cart badge: bounce animation using the Web Animations API
- Cart drawer: bottom sheet slide transition
- Confirmation modal: fade and scale transition

## Author Notes

This project is designed as a clean UI/UX assignment submission and GitHub portfolio piece. It focuses on clarity, hierarchy, mobile ergonomics, and interaction feedback rather than backend functionality.
