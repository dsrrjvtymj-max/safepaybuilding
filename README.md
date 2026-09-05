# SafePay Building

A marketing website for **SafePay Building**, an escrow-protected payment concept for construction and renovation projects. Funds are held in escrow and released to contractors as project milestones are completed and verified by the client.

## Stack

Static HTML, CSS, and vanilla JavaScript — no build step required.

## Structure

```
index.html      Main page (hero, features, how it works, pricing, FAQ, contact)
css/style.css   Styles
js/main.js      Mobile nav, FAQ accordion, contact form handling
```

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This site is static and can be hosted for free via GitHub Pages: in the repo settings, enable Pages and point it at the `main` branch root.
