# Blueprint site — what this folder is, and how to push it

`blueprint-site/` is the rebuilt site. It is a drop-in replacement for the repo root of `dvmadhumitha/PM-Side-Projects`: the same file names as the live site, one shared `styles.css`, the same `analytics.js`, the same `assets/`.

## What is in it

| File | Page | Format |
|---|---|---|
| `index.html` | 00 | The drawn hero and the project tiles. ASCOLTO, payments and Italy are double width, each with an "In short" panel of three figures from its page; payments carries the small turning globe. The teardowns tile is double width near the end: three small stacks, each in its area's colour, that pull apart on hover. Beside it the AI models tile: one dot a model, priced per million tokens until hover moves each dot to its measured cost per task. The city planning tile opens close on one residential cluster; on hover it pulls back to the whole city. Then the legend, about and say hi |
| `demo-examsim.html` | 01 | Sit a section: a running exam clock over the four sections, the real screenshots, the live app |
| `demo-vegroute.html` | 02 | The corridor: a slider for the corridor width, filters, stops that light up inside it |
| `city-planning.html` | 03 | Six chapters, one figure each. Hyderabad today and its planning issues; the land and the workforce; homes, growth and the brief in six steps; ten reference cities with a verdict each; eight kinds of cluster as tabs, each drawn, with what sits where inside and why; the plan assembled one kind at a time beside where each goes, why, and which reference cities show it, with a zoom from the plan into any cluster; four failed layouts; the health tiers and the same sort on a screen. Then the PM lens and the decision. The title, A PM’s city plan, sits beside a picture that opens close on one residential cluster and pulls back to the city, once |
| `demo-currency.html` | 04 | Rethinking the currency note: ten notes from around the world compared at one scale, today’s ₹500 taken apart, the spec, and the new family to pick, flip, fold and see as some users do |
| `demo-boardingpass.html` | 05 | The stepped drawing: eight states of one pass |
| `demo-elevator.html` | 06 | Two panels, one building: a small lift simulator with scenarios |
| `demo-payments.html` | 07 | The turning globe in the header, then five chapters. Chapter 01 walks a $100 payment party to party: each fee drops off where it is taken and the ledger writes the line |
| `course-digital-euro.html` | 08 | The machine: the six pieces, the holding-limit waterfall, the two calendars |
| `guide-italy.html` | 09 | The phone: tap a folder, read its chapter; colour by brand or by builder |
| `teardowns.html` | 10 | The teardowns hub: grouped rows of the products, by area (devices, money and shopping, getting around, media, social, work and search, learning) or by algorithm, with a find box and a marketplaces toggle, each row linking to its own page, then a strip on how every teardown is built |
| `teardown-<slug>.html` | 10 | One page per product: watch, workouts, airtag, findmy, card, upi, amazon, maps, uber, metro, netflix, spotify, shazam, whatsapp, instagram. Each runs: the question, who it is for (two or three use cases and the personas), one stage with two tabs (how it works: the drawing, five ways by what the thing is, with the steps under it, each lighting the part it happens in, and a walk through; the system), the PM file (users, how it earns, north star, lineup, AI inside, issues, trivia, the algorithm), the PM file in three columns (users, business, what sets it apart), the PM lens, the decision inside, sources, previous and next. Tap any flow step, system layer or PM file figure for a short PM note. The PM file, in three columns, also lists who uses the product, where the users are, how it grew and the key products out there |
| `teardowns.css`, `teardowns.js` | — | Shared by the hub and every teardown page, on top of `styles.css` |
| `ai-models.html` | 11 | AI models, taken apart, in six levels from plain words to the numbers, with a stepped ladder under the title that jumps to each. Level 1: what a model is, drawn as an app with a swappable engine (tokens in, the answer out, the bill), beside three plain ideas and each maker's range. Level 2: fourteen models as characters with three stat bars (brains, speed, thrift); a card opens its profile: who made it, what it is for, why the name, good at, watch out, where you meet it, and a button to its numbers in Level 5. Level 3: twelve apps, four each in India, the US and Italy, wired to ten model families; an app opens what it does and why it chose them, with a source; a reason lights every app chosen for it, and a table sets the reasons by country. Level 4: four problem statements that light the clues and the kinds of model they need, with the call drawn as a chain, then seven jobs and where their tokens go, with a shortlist and a month's bill. Level 5: the shelf, score against cost priced three ways, with dials for a month and a sortable table. Level 6: judging a model in five layers, each with how it is scored and two calculators, its flow, six signals to switch, the PM lens, the decision card and the sources |
| `traffic-trams.html` | 12 | The junction: one Milan crossing with two tram tracks; controls for tram priority, the cycle and the side street, four numbers beside it, then the lamps, who decides and the green wave |
| Every page | — | Below the interactive drawing, a "working figures" band carries the original figures, interactives and animations from the folder pages, recoloured to the site palette |
| `globe.js` | — | The turning globe, shared by the payments header and the homepage tile |
| `note-usd.jpg` … `note-inr.jpg` | 04 | Optional photos of the real notes for the currency page’s Fig. 1, one per currency: the front of its lowest value (usd, eur, jpy, gbp, chf, aud, cad, sgd, nok, aed, inr; `.png` or `.webp` also work). Upload them beside `demo-currency.html`; until then Fig. 1 shows its drawings |
| `styles.css` | — | The whole system; every page links it. `?static=1` on any URL switches motion off |
| `BUILD-GUIDE.md` | — | The rules and skeleton every page was built to |
| `README.md` | — | The repo's front page on GitHub: the twelve pages, how the site is built, how to run it. Upload it with the site |
| `BLUEPRINT-NOTES.md` | — | The design notes from the first Blueprint pages, formerly `README.md`. Not uploaded |

Not carried over, on purpose: `tracker.html`, `prototype.html`, `payments-six.html`, `payments-billing-course.html`, `limehome-interview-prep.html`, `_diag.html`, `demo-cityplanning.html`, `demo-matchmaking.html`. `cils-app/` and `restaurants-on-your-way/` live only in the repo and stay as they are.

## Before pushing

1. Read every page once as a visitor. Section headings, figures and numbers come from your existing pages; the connecting sentences were rewritten for the format. Each page now also carries its original figures in full, so the long reads (payments above all) are long again.
2. Operate every drawing, then the restored originals below it (the globe and world map, the rail book, the city drafts and cluster explorer, the ₹ note dots, the pass scrubber and tear-off, the two lift panels, the live route map, the euro picker, the Italy phone and map). Sheets: the clock, the corridor slider, the layers, the note bench, the pass stepper, the lift panels, the switchboard, the waterfall, the phone. Each page's build note lists what was illustrated rather than sourced.
3. Open the homepage on a phone. The hover motion plays as tiles scroll into view.

## Things the build flagged for you to check

Illustrated rather than sourced, or a judgement call. None is a known error.

- **01 ASCOLTO.** The Orale block has no stated duration in your page; the clock uses 10 minutes for it. The Play 1 / Play 2 buttons simulate the two plays; there is no audio. The sample transcript sentence is invented for the drawing.
- **02 Route Stops.** All ten stop names, tags and distances are illustrative; the three "not in the data yet" stops illustrate the rural-gap point; the paid-source line quotes no price. The live link is the GitHub repo.
- **03 City planning.** The header plan, the eight cluster drawings and the assembled plan are schematic. The numbers are sourced; the costs read from Hyderabad’s issues, the verdict on each reference city, the plan lines, what goes in each cluster and the placement rules are the page’s reading, and it says so. The site is an assumption; workers, households and ages are Telangana’s, not the city’s. The lakes, the drains, the vehicles, Bharat Future City and Copenhagen's offices rule each rest on one source. The city figures on the ten tiles are carried over from the first version of the page. Sources in `CHANGELOG-city-planning.md`.
- **04 Currency.** Sizes, colours and features come from the issuing central banks (RBI, ECB and OeNB, Bank of Japan and Japan’s Ministry of Finance, Bank of England, SNB, RBA, Bank of Canada, MAS, Norges Bank, CBUAE) or the BIS; Norway’s sizes and colours are from Poland’s central bank, NBP. Where an issuer names no colour or material, the source is a named secondary one (Wikipedia, nippon.com, CNN, Landqart, Keesing), listed in CHANGELOG-currency.md. The notes are drawn as coloured rectangles at one scale, never as copies of the real designs. Where the RBI gives no position on the ₹500, the drawing follows Wikipedia and the note itself. The serial numbers and the year on the redesign are mock.
- **05 Boarding pass.** "Gate closes 07:50" is 08:15 minus the 25 minutes you state; the live-layer examples are illustrations.
- **06 Elevator.** The simulator's timings (6 s a floor, 4 s a stop) and car positions per scenario are its own. "Retrofit" is worded as an inference.
- **07 Payments.** Restructured into a globe header and five chapters: follow one payment, how big it is, where each rail wins, who gets paid, the rules. Each chapter has one PM-lens card. Dropped as repeats: the "four ways to earn" panel (it contradicted the six ways in the company strip), the old animated rail figure (the new $100 walk replaces it), the did-you-know tiles except the payments-per-second counter, and the closing paragraph that restated the Decided card. The rail book now sits in a "This rail in detail" panel under the triangle. Fees per hop: card splits come from your three-markets figure; cross-border uses your $10 to 30 per correspondent and 0.5 to 3% FX, shown as a range on a shared-charges transfer; RTGS fees are shown on top, paid by the sender. Where the source has no figure the drawing says not costed. The $100 walk plays each time it scrolls into view and steps through the five rails on its own until someone clicks a rail, a market or Replay. The world map shows a standing prompt, a hover label and three pulsing countries until the first click.
- **08 Digital euro.** The waterfall model keeps a fixed total across wallet and account so the two levels add up. The 2021 and 2023 phase boundaries are drawn from your calendar labels.
- **09 Italy.** The drawing's map is a schematic four-area outline; the original twenty-region map is restored below it. Three brand colours in the top-ten list (Threads, Chrome, Remini) are picks; the phone's apps use your colours, except the eight added on 1 November 2026 (eBay, Back Market, YOOX, LuisaViaRoma, Vestiaire Collective, Zooplus, Arcaplanet, Isola dei Tesori), whose colours are picks. The second hand, luxury and pet folders, with their sources, are logged in the project's Italy changelog.
- **Restored originals.** The sticky notes use Caveat; the originals asked for Kalam, which never loaded. The currency chart's outlier badge was moved a row down, because it covered the rupee line in the original too. Route Stops calls OpenStreetMap services live, as before.
- **10 Teardowns.** Each page was reviewed after the split; the claims the reviewers could not tie to a listed source are listed in `CHANGELOG-teardowns.md` under "check before pushing". Split on 30 October 2026 from one 800 KB page into a hub and fifteen pages, so each product has a link of its own; the content is unchanged. The drawings are schematic: the watch, card and AirTag keep their real outer sizes (39 × 46 mm, 85.60 × 53.98 mm, 31.9 mm across); the apps and services are drawn as layers of a system rather than of a device. Interview questions: the watch, AirTag and Shazam lenses use the sample questions Leland gives for each Apple round; the others are candidate reports on PracHub, Prepfully, Interview Query and JobMentis, except Uber, which is a prep site list (CleverPrep) and says so. productmanagementexercises.com could not be reached when this was built. The system views (Fig. 3) are simplified from public engineering write ups and ByteByteGo's guides, retold and cited rather than copied (those guides are CC BY NC ND). The 500 ms gate figure is the industry requirement from the American Express transit FAQ, not a Milan measurement. Two figures rest on one source each: 81 workout types (Wikipedia) and the 24 hour findable window after switching off (Macworld). The UPI fee in its decision card was deferred on 13 October 2026 with no new date: check it before pushing. Every figure, with its source, is in `CHANGELOG-teardowns.md`.
- **11 AI models.** Scores, prices and speeds are a snapshot from Artificial Analysis read on 29 October 2026, and they move every few weeks: if the page waits longer than that, check the leaderboard and update `models_data.py` before pushing. Model names are written without their hyphens (GPT 6 Astra), as everywhere on the site. Gemini 4 Carbon is not on general sale; its announced price rests on one report (Unite.AI), and the text arena order on one report (OfficeChai, 28 October 2026). The seven jobs in Fig. 2 are worked examples: their token counts and monthly volumes are assumptions, and the page says so; the coding agent and the research brief are priced from the measured cost per task instead. The app examples in Level 3 are dated (Siri on Gemini since iOS 27, 14 September 2026; Claude in Microsoft 365 Copilot since September 2025) and can change: check them with the scores. The nicknames in Level 2 are this page's own, each tied to a sourced fact. The twelve apps, the kinds of model and the signals to switch were added on 2 November 2026; MakeMyTrip's figures, Fastweb's claims, Ferrari's quote, the WhatsApp ruling and the GPT 4.5 retirement date each rest on one source. Every figure, with its source, is in `CHANGELOG-ai-models.md`.
- **12 Trams.** The junction is a model: its traffic, timings and caps are choices, stated on the page. Milan's 2011 light and camera counts, the 2015 tram 9 trial, the amber timing rules and the Sirio's size each rest on one secondary source. Every figure is in `CHANGELOG-traffic.md`.
- **Everywhere.** The "what it cost" lines in the Decided cards are summaries written for this build.

## Pushing

Option A, GitHub website: https://github.com/dvmadhumitha/PM-Side-Projects → Add file → Upload files → drag in everything from this folder except the `.md` files, but do include `README.md`: it is the repo's front page on GitHub. Commit message: `Rebuild the site as technical drawings`. Commit to `main`. Pages redeploys in about a minute.

Option B, from a clone:

```bash
git clone https://github.com/dvmadhumitha/PM-Side-Projects.git
cd PM-Side-Projects
git checkout -b blueprint
# copy everything from blueprint-site/ except *.md (keep README.md) into the repo root, replacing what is there
git add -A
git commit -m "Rebuild the site as technical drawings"
git push -u origin blueprint
```

## Running it locally

Plain HTML, no build step. Open `index.html`, or serve the folder:

```bash
python -m http.server 8765
```
