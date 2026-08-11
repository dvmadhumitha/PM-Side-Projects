# Rethinking the Boarding Pass

**A first-principles teardown of a document several people read for different reasons**
Madhumitha D V · Product exploration

---

## 1. The task

Deconstruct the boarding pass from the information out: classify every field by whether it was known when the pass was issued, then map which reader uses which field, and at what point in the journey.

**The constraint:** the passenger carries one artifact from check-in to the exit. It has to work at every checkpoint along the way.

## 2. Assumptions

- **Domestic travel within India**, single segment, no connection.
- Example route: **BLR → DEL**, IndiGo 6E, 08:15 departure, flight time ~2h 45m.
- The booking is confirmed and a **seat is assigned**; the boarding pass is issued at check-in (web or counter).
- Before check-in the passenger holds **ticket details (PNR) and photo ID** — not a boarding pass. Terminal entry is therefore checked against the ticket, not the pass.
- One checked bag (**15 kg**) and one cabin bag (**7 kg**), per the domestic allowance on this fare.
- A **printed** pass, since the study concerns a single physical artifact.
- Domestic boarding gates close **25 minutes** before departure; check-in counters close 60 minutes before.

---

## 3. Stakeholders, and why three

The journey map listed everyone who touches the trip: passenger, terminal entry staff, check-in and bag-drop staff, security officer, gate agent, cabin crew, baggage handlers, airline operations, lounge and retail staff, and marketing partners.

**Shortlisting rule:** keep the readers who make a decision about the passenger **using the pass itself**, at a defined moment in the journey.

That excludes:

- **Airline operations and baggage handlers** — they work from systems and bag tags, not the pass.
- **Terminal entry staff** — they check the ticket and photo ID, since the pass may not exist yet.
- **Cabin crew, lounge and retail staff** — they may read it, but no decision depends on the reading.

The three taken forward:

| Stakeholder | Use case | Reading pattern |
|---|---|---|
| **Passenger** | Orientation and wayfinding — where to go, by when, where to sit | Repeated, across the whole journey |
| **Security officer** (pre-embarkation) | Eligibility to enter the sterile area — this person, today, on a real flight | One quick read, in a moving queue |
| **Gate agent** (pre-boarding) | Boarding authorisation and sequencing — board now, and in what order | A scan plus a glance |

Their field sets overlap very little. Only the passenger name and flight number are used by all three.

---

## 4. The pass used to change during the journey

Until about 2010 the pass came perforated. At the gate the agent tore it: the airline kept the larger **gate coupon**, and the passenger kept a smaller stub carrying name, flight, date, destination and seat.

The airline's half served four purposes: **headcount reconciliation** against the system before door close; **baggage matching**, as evidence the passenger boarded so the checked bag could remain on board; **settlement between carriers**, as proof of carriage; and the **flight manifest**.

Bar-coded passes became mandatory at the end of 2010 under **IATA Resolution 792**, and a gate scan now records boarding directly.

The design point is what the tear did: **the artifact changed at the moment the passenger's status changed**, and what remained was a smaller field set for the phase after boarding. In India the same idea existed as a security **stamp** — two of the three readers marked the pass. Today the pass carries one fixed field set from issuance until it is discarded.

---

## 5. Classifying the information

The sorting question: **was this known when the pass was issued?**

### A · Static — known at issuance, unchanged afterwards

Airline and flight number · date · origin and destination · passenger name · PNR · class · boarding group · sequence number · baggage allowance · **baggage tag reference** · meal · departure terminal · **gate closing time** · barcode payload · partner offer.

### B · Dynamic — not known at issuance

**Gate number** · flight status · **arrival terminal** · **baggage belt number**.

### C · Static, then changes — printed as fact, can change before departure

**Departure time** (delays) · **boarding time** (follows departure) · **seat** (aircraft change).

Bucket C is why the split is three-way rather than two: these fields print like static ones and behave like dynamic ones, and a two-way sort hides them entirely.

### What the sort shows

- The two fields the passenger reads most often — **gate and boarding time** — are also the two most likely to change after printing, and they carry the same visual weight as fields that never change.
- Some fields fixed at issuance and used after landing — notably the **baggage tag reference** — reach the passenger as a separate sticker rather than as part of the pass.
- The **partner offer** is the only field none of the three readers uses.

---

## 6. Design principles that follow

1. **Print what is fixed; put what can change behind a live layer.** Bucket A gets ink; buckets B and C are resolved by a scan.
2. **Size fields by the next decision the reader makes**, rather than by how official a field appears.
3. **Make the artifact phase-aware.** What it emphasises can change as the journey progresses, including a phase after boarding.
4. **Design for the reading conditions** — a moving queue, one hand occupied, limited time.
5. **Degrade gracefully.** What is essential should survive on paper alone.

---

## 7. After landing

The passenger still holds the pass at the belt and the exit, where domestic arrivals in India include a baggage tag check against the bag.

| Needed after landing | Bucket | On today's pass |
|---|---|---|
| Baggage tag reference for the exit check | A · static | Stuck on as a separate sticker |
| Arrival terminal | A / B | Sometimes |
| Baggage belt number | B · dynamic | Not printed |
| Direction to exit or onward transport | A · static | Not printed |

The baggage tag reference is known at check-in and is the one item verified at the exit, yet it reaches the passenger as an attachment rather than as part of the artifact.

---

## 8. What I would test next

- Does printing the **gate closing time** as a time, rather than as small print, change how early passengers reach the gate?
- Does integrating the **baggage tag reference** into the pass reduce handling at the arrivals exit?
- At security, does an identity-first layout measurably speed the check?
- How quickly does a passenger discover a **gate change** under each design?

---

## 9. Acknowledgement

This exercise started as a working session with a mentor, who followed it with an introduction to information hierarchy and UX fundamentals. That vocabulary is what turned a set of observations into a method — and it is the one I have used on every teardown since.

---

*International travel adds readers, documents and a connection. It is covered separately.*
