---
layout: layouts/feed.njk
slug: kompa-vojka
title: Kompa Vojka nad Dunajom
---

Kompa medzi Vojkou nad Dunajom a Kyselicou, ktorú prevádzkuje Vodohospodárska výstavba, š. p. Feed je plne automatizovaný: [generátor](https://github.com/gtfs-sk/kompa-vojka) beží denne o 01:00 UTC, sťahuje aktuálny cestovný poriadok z API na [kompa-vojka.sk](https://kompa-vojka.sk) a z neho zostavuje GTFS.

Ak sa cestovný poriadok od posledného behu nezmenil (kontrolované cez SHA1 hash), feed sa nepresúva zbytočne znova. Výsledný `gtfs.zip` sa nasadzuje na GitHub Pages a je dostupný na stálej adrese `https://github.gtfs.sk/kompa-vojka/gtfs.zip`.

Feed obsahuje kompletnú štruktúru vrátane `fare_attributes`/`fare_rules` (cestovné) — nielen holé zastávky a spoje.

## Hodnotenie dát

Dáta generuje gtfs.sk automatizovane priamo z API prevádzkovateľa, nie ručne — aktuálnosť je preto vysoká a obmedzená iba tým, ako často prevádzkovateľ mení svoj vlastný cestovný poriadok. Keďže ide o generovaný feed (nie čistý mirror), prípadné chyby v mapovaní dát na GTFS štruktúru sú zodpovednosťou gtfs.sk, nie prevádzkovateľa.

V budúcnosti plánujeme pridať aj GTFS-RT feed s informáciami o meškaní a o zrušených spojoch, až po overení ako na tieto situácie web prevadzkovatela reaguje a či sa dá z jeho API získať spoľahlivá informácia o meškaní a zrušených spojoch.
