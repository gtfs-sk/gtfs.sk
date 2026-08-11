---
layout: layouts/feed.njk
slug: ids-bk-regionalne
title: IDS BK Regionálne
---

Regionálne autobusové linky Integrovaného dopravného systému v Bratislavskom kraji (IDS BK) — mestská doprava v tomto feede nie je. Publikovaný priamo cez [zdieľaný Google Drive priečinok](https://drive.google.com/drive/folders/1n9r_hGe-msl3bGa0q9vqI_ENODHT6n7x), nie cez klasický open data portál.

## Hodnotenie dát

Feed je celkovo v poriadku, ale má pár konkrétnych nedostatkov:

- **Chýbajú `shapes.txt`** úplne — trasy sa na mape nedajú vykresliť podľa skutočného priebehu, iba ako priame spojnice zastávok.
- **Pokrýva len regionálne autobusy.** Mestská doprava v tomto feede nie je.
- **Nivy sú jedna združená zastávka.** Autobusová stanica Nivy je jeden z najväčších uzlov v kraji, no v dátach je len jediný stop bez rozdelenia na nástupištia — pre cestujúceho aj pre appku je tak ťažké zistiť, kde presne má nastupovať.

Feed vo všeobecnosti nefolluje GTFS best practice pre pomenovanie parent station / child stop, kde by mal názov dieťaťa jasne identifikovať konkrétne nástupište:

| Parent Station Name | Child Stop Name |
|---|---|
| Chicago Union Station | Chicago Union Station Platform 19 |
| San Francisco Ferry Building Terminal | San Francisco Ferry Building Terminal Gate E |
| Downtown Transit Center | Downtown Transit Center Bay B |

Treba ale povedať, že v tomto smere nie je IDS BK Regionálne výnimka — takto to nerobí skoro žiadny feed na Slovensku, vrátane DPB.
