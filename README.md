# MARJORA AGENCY — Website

**Connecting Africa Through Trade.**

A premium Next.js website for MARJORA AGENCY, an African coffee sourcing and
trading agency based in Uganda.

Built with **Next.js 15 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + Lucide icons**.

---

## 1. Getting Started

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

For a production build:

```bash
npm run build
npm start
```

---

## 2. ADDING YOUR HERO VIDEO CLIPS — READ THIS

The homepage hero plays a cinematic sequence of video clips that crossfade
into each other. The code expects exactly these file names:

```
clip1.mp4
clip2.mp4
clip3.mp4
clip4.mp4
clip5.mp4
clip6.mp4
clip7.mp4
clip8.mp4
clip9.mp4
clip10.mp4
```

### Where to put them

Put the files in this folder:

```
public/videos/hero/
```

Full path on your computer:

```
C:\Users\ADMIN\Desktop\ARSENE-NOVEMBER\M.A.R.J.E.N.E WORKSHOP\MARJORA AGENCY\public\videos\hero\
```

**Clip 1–6 are already there** (copied from your `clip (1).mp4` … `clip (6).mp4`
files). Just download your remaining clips, rename them to `clip7.mp4`,
`clip8.mp4`, `clip9.mp4`, `clip10.mp4` and drop them into the same folder.
No code changes needed — missing clips are skipped automatically, and the
sequence loops forever once at least one clip exists.

Tips for the clips:
- Landscape orientation, at least 1080p.
- Nature / agriculture / coffee footage (plantations, farmers, cherries,
  mountains, forests, sunrise/sunset).
- 10 seconds or longer each is ideal; shorter clips simply advance sooner.
- Compress them for web (e.g. with HandBrake, H.264) so the page stays fast
  on mobile internet.

The clip list itself lives in `src/data/site-config.ts` (`heroClips`) if you
ever want to change the number of clips or their names.

---

## 3. Editing Website Content (no coding skills needed)

Almost everything editable lives in `src/data/`:

| File | What it controls |
|---|---|
| `src/data/site-config.ts` | Business name, tagline, phone numbers, WhatsApp number, social links (enable/disable), hero video list, hero rotating messages |
| `src/data/stock-data.ts` | The "Indicative Sourcing Availability" figures on the homepage (set `enabled: false` to hide it) |
| `src/data/coffee-data.ts` | Coffee categories on the Coffee page (names, descriptions, photos) |
| `src/data/market-data.ts` | Target markets list |
| `src/data/journey-data.ts` | The 6 journey steps (farm to market) |

The WhatsApp enquiry message format is in `src/lib/whatsapp.ts`.

### Social media

Accounts are not created yet, so the icons show as "coming soon".
When an account goes live, open `src/data/site-config.ts` and set
`enabled: true` (and paste the URL) for that network — the icon becomes a
working link automatically.

---

## 4. Brand Assets

| Asset | Location |
|---|---|
| MARJORA logo | `public/images/logo/marjora-logo.jpg` |
| Giant coffee bean (scroll experience + favicon) | `public/images/bean/giant-bean.jpg` and `src/app/icon.jpg` |

To replace them, overwrite the file with the same name.

---

## 5. Pages

- `/` — Home: cinematic video hero, rotating headline, sourcing availability,
  giant coffee bean scroll experience, journey, image slider, markets, CTA
- `/about` — mission, vision, values
- `/coffee` — coffee categories, industry section, image slider, markets
- `/contact` — phone / WhatsApp / location cards
- `/lets-talk` — full enquiry form that opens WhatsApp (+256 704 125 517)
  with the message pre-filled

---

## 6. Image Credits

Photographs were sourced from openly licensed libraries (Flickr / Rawpixel /
Openverse index) under Creative Commons (CC-BY, CC-BY-SA, CC-BY-ND, CC0)
licences. If you replace any image, note the author and licence here.

| File | Source | Licence |
|---|---|---|
| images/hero/hero-poster.jpg | Flickr photo 105208286 | CC BY |
| images/journey/cultivation.jpg | Flickr photo 6207726361 | CC BY-SA |
| images/journey/harvesting.jpg | Flickr photo 8808037070 | CC BY |
| images/journey/processing.jpg | Flickr photo 29481015018 | CC BY |
| images/journey/sorting.jpg | Flickr photo 6265437185 | CC BY-SA |
| images/journey/packaging.jpg | Rawpixel (px1083670) | CC0 |
| images/journey/export.jpg | Flickr photo 6240347805 | CC BY-ND |
| images/coffee/robusta-18.jpg | Rawpixel (upw61713825) | CC0 |
| images/coffee/robusta-15.jpg | Flickr photo 2215017662 | CC BY-SA |
| images/coffee/faq.jpg | Flickr photo 5984450616 | CC BY |
| images/coffee/kiboko.jpg | Flickr photo 9681028923 | CC BY |
| images/coffee/arabica.jpg | Flickr photo 8806269330 | CC BY |
| images/about/hero.jpg | Flickr photo 4784694098 | CC BY |
| images/about/farmers.jpg | Flickr photo 5984450578 | CC BY |
| images/nature/valley.jpg | Flickr photo 3264713262 | CC BY |
| images/contact/contact-bg.jpg | Flickr photo 8806585652 | CC BY |

> Sample stock figures on the homepage are placeholders for illustration —
> confirm real availability with the team before publishing them as fact.
