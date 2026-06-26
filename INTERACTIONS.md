# Interaction and Animation Notes

This prototype uses browser-based motion to represent the kind of micro-interactions that could be recreated in ProtoPie or After Effects.

## Splash Reveal

The splash screen appears first with the BiteFlow mark. The logo scales in, then the full splash layer fades out.

Purpose:

- Establish brand identity
- Create a polished app-opening moment

## Food Card Hover / Tap

Food cards lift slightly on hover. On click or tap, the detail panel opens.

Purpose:

- Indicate that cards are interactive
- Make discovery feel tactile

## Detail Panel Transition

The detail screen uses a horizontal slide-in transition from the right.

CSS state:

```css
.panel.open
```

Purpose:

- Suggest moving deeper into the ordering flow
- Preserve the feeling of a native mobile transition

## Quantity Stepper

The plus and minus buttons update the selected quantity and subtotal immediately.

Purpose:

- Keep pricing feedback visible
- Reduce checkout uncertainty

## Add to Cart

When an item is added:

- Cart badge count updates
- Badge bounces
- A small flying accent appears
- Cart drawer opens when adding from detail

Purpose:

- Confirm the item was added
- Draw attention to the cart state

## Cart Drawer

The cart appears as a bottom sheet.

CSS state:

```css
.drawer.open
```

Purpose:

- Keep checkout lightweight
- Avoid forcing the user into a full new page

## Checkout Confirmation

After selecting Pay now, the confirmation overlay fades in and its card scales into place.

CSS state:

```css
.success.show
```

Purpose:

- Confirm task completion
- Provide a clear emotional endpoint to the flow
