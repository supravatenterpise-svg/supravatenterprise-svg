# Code Explanation

This document explains the main files in the BiteFlow prototype and how the code works.

## outputs/index.html

`index.html` contains the complete visual shell of the app:

- HTML markup for the phone frame, app screens, navigation, detail panel, cart drawer, and confirmation modal
- Embedded CSS for layout, colors, typography, responsive behavior, and animations
- A script reference to `app.js`, which controls all dynamic behavior

### Main Layout Sections

- `.stage`: The outer desktop presentation layout. It places the mobile phone mockup beside the project summary panel.
- `.phone`: The simulated mobile device frame.
- `.screen`: The rounded inner app screen.
- `.app`: The main app container that holds every screen and overlay.
- `.content`: The scroll-free content area where home, orders, and profile states are swapped.
- `.nav`: The bottom navigation bar.
- `#detail`: The product detail panel that slides in from the right.
- `#drawer`: The cart bottom sheet that slides up from the bottom.
- `#success`: The confirmation overlay shown after checkout.

### CSS Responsibilities

The CSS handles:

- Mobile frame sizing and responsive behavior
- Card grid layout
- Bottom navigation styling
- Product detail transition
- Cart drawer transition
- Splash animation
- Checkout confirmation animation
- Button press feedback
- Color palette and typography

Important animation classes:

- `.panel.open`: Moves the detail screen into view.
- `.drawer.open`: Moves the cart drawer into view.
- `.success.show`: Shows the checkout confirmation modal.
- `.cart-indicator.show`: Displays the cart badge.
- `.fly`: Runs the small add-to-cart accent animation.

## outputs/app.js

`app.js` contains the app state and user interaction logic.

### Data Model

The `foods` array stores all meal data used to render the cards and detail screen.

Each food item has:

- `title`: Meal name
- `price`: Numeric price
- `img`: Local SVG image path
- `desc`: Detail screen description
- `meta`: Short supporting text, such as time or calories

### App State

The app uses three small state variables:

- `selected`: The currently selected food item
- `qty`: The quantity selected on the detail screen
- `cart`: The current cart contents

### Main Functions

#### `money(n)`

Formats a number as a price string with two decimal places.

#### `renderCards()`

Creates the recommended food cards from the `foods` array and inserts them into the home screen.

#### `openDetail(i)`

Receives a food index, updates the detail screen with that food's data, resets the quantity to 1, and opens the detail panel.

#### `updateQty()`

Updates the visible quantity and recalculates the detail screen subtotal.

#### `addToCart(item, count)`

Adds an item to the cart. If the item is already present, it increases the existing quantity instead of creating a duplicate row.

It also:

- Updates the cart badge count
- Shows the cart badge
- Runs the badge bounce animation
- Re-renders the cart drawer

#### `renderCart()`

Updates the cart drawer UI. If the cart is empty, it shows an empty state. If the cart contains items, it displays item rows and calculates the total.

The total includes a fixed delivery fee of `$1.90` only when the cart has items.

#### `fly()`

Creates a temporary visual accent that animates during add-to-cart interactions. The element removes itself after the animation finishes.

### Event Listeners

The script connects UI actions to app behavior:

- Clicking a food card opens the detail screen.
- Clicking a card's plus button adds that item directly to the cart.
- Back closes the detail screen.
- Plus and minus update quantity.
- Add to cart adds the selected detail item and opens the cart drawer.
- Cart buttons open the cart drawer.
- Close hides the cart drawer.
- Pay now shows confirmation when the cart has items.
- Done clears the cart and closes checkout state.
- Favorite toggles between outline and filled heart states.
- Bottom nav buttons swap between home, orders, and profile views.

## outputs/assets

The `assets` folder contains local SVG food illustrations. Keeping assets local makes the prototype portable and GitHub-friendly.

## Design Handoff

`outputs/figma-handoff.md` explains the intended design setup for Figma or Adobe XD and lists the interaction notes for ProtoPie or After Effects animation planning.
