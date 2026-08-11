---
layout: layouts/feed.njk
slug: mhd-presov
title: MHD Prešov
---

Mestská hromadná doprava v Prešove, prevádzkovaná Dopravným podnikom mesta Prešov. Feed pokrýva všetky autobusové linky MHD vrátane nočných spojov.

## Hodnotenie dát

Dáta sú celkovo v poriadku, s pár konkrétnymi nedostatkami:

- **Zastávky na znamenie** nie sú definované správne cez GTFS — teda cez `pickup_type`/`drop_off_type = 3` (must coordinate with driver) v `stop_times.txt`. Namiesto toho sa signalizujú neštandardne, znakom `*` v mene zastávky.
- **Chýbajú transfery typu 4** (`transfer_type = 4`, in-seat transfer) v `transfers.txt` — pre spoje, kde cestujúci pokračuje v tom istom vozidle bez nutnosti prestupu, by mali byť explicitne definované. Táto informacia sa nachádza v trip_headsign.
