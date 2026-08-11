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
- **Neexistujúce živé dáta mimo aplikácie IDS BK a iMHD** — IDS BK má vlastnú appku, ktorá zobrazuje živé dáta o meškaní a polohe vozidiel, ale feed s GTFS-RT dátami nie je verejne dostupný.
- **Názvy zastávok sa zobrazujú len v skrátenej podobe** — napr. zastávka "Hodžovo námestie" je v dátach len "Hodžovo nám.", čo môže spôsobiť problémy pre Text-to-speech systémy, ktoré pomáhajú nevidiacim cestujúcim. Pre porovnanie hlasový informačný systém vo vozidlách obsahuje plné názvy zastávok. Toto je známa limitácia formátu GTFS, odporúčame iným publishers, aby pridávali plné názvy zastávok do políčka `tts_stop_name` ([pozri odporúčanie](https://gtfs.org/documentation/schedule/examples/text-to-speech/)