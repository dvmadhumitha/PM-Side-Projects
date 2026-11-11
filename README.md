# Ordinary things, taken apart

Side projects by Madhumitha D V, a product manager in Milan. Each page takes one everyday thing apart as a drawing you can operate, then looks at it the way a product manager would: what it is for, how it works, the numbers, and the decision it turns on.

**Live site: https://dvmadhumitha.github.io/PM-Side-Projects/**

## The pages

| | Page | What is on it |
|---|---|---|
| 01 | [ASCOLTO: Language Exam Simulator](https://dvmadhumitha.github.io/PM-Side-Projects/demo-examsim.html) | A CILS A2 exam simulator: four timed sections in the exam's order, with the listening played twice, as on the day. The app itself is live in [`cils-app/`](https://dvmadhumitha.github.io/PM-Side-Projects/cils-app/). |
| 02 | [Route Stops](https://dvmadhumitha.github.io/PM-Side-Projects/demo-vegroute.html) | A Chrome extension that lists every place to eat within a corridor of your route. Its code is in [`restaurants-on-your-way/`](restaurants-on-your-way/). |
| 03 | [A PM’s city plan](https://dvmadhumitha.github.io/PM-Side-Projects/city-planning.html) | How a product manager would plan a city: a new city of ten lakh beside Hyderabad, as six questions answered in order. Where it sits, the land and the people, how many, who has done it, what goes in a cluster (residential, business, education, city centre, shopping and entertainment, transport, industry, green), and how the clusters come together as one system. |
| 04 | [Currency Design Breakdown](https://dvmadhumitha.github.io/PM-Side-Projects/demo-currency.html) | The ₹10, ₹20 and ₹100 notes at real size: flipped, rotated, sized by value and set against the euro and the dollar. |
| 05 | [Boarding Pass Design Analysis](https://dvmadhumitha.github.io/PM-Side-Projects/demo-boardingpass.html) | One printed pass, three readers, and the fields that change after printing. The first write up is in [`case-study-boarding-pass.md`](case-study-boarding-pass.md). |
| 06 | [Elevator Call Buttons, Fixed](https://dvmadhumitha.github.io/PM-Side-Projects/demo-elevator.html) | Two call panels on one building: press either and see what the rider is told. |
| 07 | [A product manager's map of payments](https://dvmadhumitha.github.io/PM-Side-Projects/demo-payments.html) | Five ways money actually moves. Follow a $100 payment hop by hop and see who takes a cut. |
| 08 | [The digital euro, and the machine under it](https://dvmadhumitha.github.io/PM-Side-Projects/course-digital-euro.html) | Europe is building a public payment rail to stand beside the card networks: five lessons, drawn. |
| 09 | [Italy, one app at a time](https://dvmadhumitha.github.io/PM-Side-Projects/guide-italy.html) | Fifty apps in fifteen folders, each with who built it and how many people use it. |
| 10 | [Product teardowns](https://dvmadhumitha.github.io/PM-Side-Projects/teardowns.html) | Nineteen products, from an Apple Watch to UPI: what happens inside, the business and the algorithm. |
| 11 | [AI models, taken apart](https://dvmadhumitha.github.io/PM-Side-Projects/ai-models.html) | What a model is, who makes the leading ones, which apps in India, the US and Italy run on them and why, which kind of model a problem needs, what they cost, and how to score one. |
| 12 | [Why does a Milan tram wait at a red light?](https://dvmadhumitha.github.io/PM-Side-Projects/traffic-trams.html) | One Milan junction you can run: tram priority, the length of the cycle and a busy side street, and who waits for whom. |

## How it is built

- Plain HTML, CSS and JavaScript: no framework and no build step. GitHub Pages serves the repository as it is.
- One shared stylesheet, `styles.css`. The teardowns add `teardowns.css` and `teardowns.js`; the homepage and the payments page share `globe.js`; the ASCOLTO screenshots are in `assets/`.
- Add `?static=1` to any address to switch the motion off.

## Also in this repo

- [`cils-mobile/`](cils-mobile/): the Android and iOS apps for ASCOLTO. They wrap the web app in `cils-app/`, so a feature added to the web app reaches all three with `npm run sync`. See its README.
- `demo-cityplanning.html` and `demo-matchmaking.html`: earlier pages on city planning and ride hailing matchmaking, kept at their addresses but no longer linked from the site.

## Run it locally

Open `index.html` in a browser, or serve the folder and open http://localhost:8765:

```
python -m http.server 8765
```

## Contact

[Email](mailto:dvmadhumitha2021@outlook.com) · [LinkedIn](https://www.linkedin.com/in/madhumitha-d-v-a04ab8179/)
