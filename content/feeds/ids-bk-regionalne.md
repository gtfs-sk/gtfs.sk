---
layout: layouts/feed.njk
slug: ids-bk-regionalne
title: IDS BK Regionálne
---

Regionálne autobusové linky Integrovaného dopravného systému v Bratislavskom kraji (IDS BK) — mestská doprava v tomto feede nie je. Publikovaný priamo cez [zdieľaný Google Drive priečinok](https://drive.google.com/drive/folders/1n9r_hGe-msl3bGa0q9vqI_ENODHT6n7x), nie cez klasický open data portál.

## Hodnotenie dát

Môžme konštatovať, že toto je jeden z najlepších veľkých Feedov na Slovensku. Avšak má pár konkrétnych nedostatkov:

- **Chýbajú `shapes.txt`** úplne — trasy sa na mape nedajú vykresliť podľa skutočného priebehu, iba ako priame spojnice zastávok.
- **Pokrýva len regionálne autobusy.** Mestská doprava v tomto feede nie je. Čo nevadí, toto sa stáva problémom pre Consumer aplikácie, ktoré potom musia nástupišta (medzi DPB a IDSBK feedmi) spájať dokopy, nie vždy sa to podarí správne.
- **Nivy sú jedna združená zastávka.** Autobusová stanica Nivy je jeden z najväčších uzlov v kraji, no v dátach je len jediný stop bez rozdelenia na nástupištia — pre cestujúceho aj pre appku je tak ťažké zistiť, kde presne má nastupovať.
- **Neexistujúce živé dáta mimo aplikácie IDS BK** — IDS BK má vlastnú appku, ktorá zobrazuje živé dáta o meškaní spojov, ale feed s GTFS-RT dátami nie je verejne dostupný.
