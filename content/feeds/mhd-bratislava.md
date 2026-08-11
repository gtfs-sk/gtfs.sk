---
layout: layouts/feed.njk
slug: mhd-bratislava
title: MHD Bratislava (DPB)
---

Mestská hromadná doprava v Bratislave — autobusy, električky aj trolejbusy — ktorú prevádzkuje Dopravný podnik Bratislava (DPB). Feed publikuje priamo DPB na [Bratislava Open Data](https://data.bratislava.sk/datasets/aba12fd2cbac4843bc7406151bc66106/about), gtfs.sk ho iba odkazuje bez úprav.

## Hodnotenie dát

Celkovo 8/10 — a aj tak je to jeden z najlepších feedov na Slovensku. Feed je pravidelne aktualizovaný a pokrýva celú sieť DPB, ale má dve konkrétne slabiny:

- **`shapes.txt`** — trasy nemajú správne definované shapes, takže priebeh liniek na mape nezodpovedá skutočným trasám vozidiel.
- **`route_long_name`** — namiesto plnohodnotného názvu trasy obsahuje interné poznámky DPB, nie údaj čitateľný pre cestujúcich alebo aplikácie tretích strán.
