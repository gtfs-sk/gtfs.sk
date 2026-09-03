---
layout: layouts/feed.njk
slug: zsr
title: Železnice Slovenskej republiky (ŽSR)
---

Na žaciatok by chce chceli povedať, že tento feed je Odysea sama o sebe. Tento feed s nami tu je už dlhé roky, a za tie roky zmenil sa jeho stav a kvalita. Feed je publikovaný priamo ŽSR na [data.slovensko.sk](https://data.slovensko.sk/datasety/ebeeedf1-aca2-451a-bdc0-35d536714888) a my ho bohužial musíme upravovať.

## Hodnotenie dát

Jeden z najvačších feedov, a technologicky určite komplikovaný undertaking. Feed je pravidelne aktualizovaný a pokrýva celú sieť ŽSR, ale má pár konkrétnych slabín:

### Každý separátny trip má separátny route
— čo je na dlhšiu debatu o tom ako by sme mali definovať ako majú vyzerať trasy vlakov zohladnené v GTFS. Rule-of-thumb je, že dáta definujeme v GTFS tak ako ich cestujúci vidí na zastávke/stanici.
Čo teda vidí cestujúci naživo?
- Hlásenie z INISS: Identifikuje vlaky podla ich Kategórie a potompri kategóriach vyšších než Os aj s číslom a menom.
	- ,,Osobný vlak, linky S20, Železničnej Spoločnosti Slovensko, smer ..."
	- ,,Vlak RegionalExpres 1726, Železnicnej Špoločnosti Slovensko, zo smeru ..."
	- ,,Regionalny rýchlik 15715 Považan, Železnicnej Špoločnosti Slovensko, ..."
- Zobrazenie na tabuliach:
	- ![Chybne označený vlak linky S50 na informačnej tabuli. Autor: Tragáčik @ imhd.sk](https://imhd.sk/ba/media/gn/00302646/Chybne-označený-vlak-linky-S50-na-informačnej-tabuli.jpg?3344360603) Tu sa preblikáva linka vlaku pod IDS a jeho kategória
	- ![Osobný vlak do Plaveckého Podhradia bude z východiskovej stanice meškať 5 minút. Autor: Sor23 @ imhd.sk](https://imhd.sk/ba/media/gn/00245004/Osobný-vlak-do-Plaveckého-Podhradia-bude-z-východiskovej-stanice-meškať-5-minút.jpg?1593244164) Tu sa zobrazuje druh vlaku
- Ako sa indetifikujú vlaky sami"
	- ![Displej Bustec vo vlaku Stadler KISS na linke R50. Autor: W.I. @ imhd.sk](https://imhd.sk/ba/media/gn/00332797/Displej-Bustec-vo-vlaku-Stadler-KISS-na-linke-R50.jpg?2118594611) Vlak sám seba indentifikuje ako Linku R50, neskôr zobrazuje druh vlaku
	- ![Označenie vlaku na dverách. Autor: Henrich Kleiner @ imhd.sk](https://imhd.sk/ba/media/gn/00253879/Bdteer-linka-S70-Stanica-Komárno.jpg?2416437611) Oznacenie ukazuje linku S70
	- !["Jánošík" na linke S60. Autor: Henrich Kleiner @ imhd.sk](https://imhd.sk/ba/media/gn/00217054/Jánošík-na-linke-S60.jpg?3051087472) "Headsign" zobrazuje linku S60
- Ako cestujúci sám rozpráva o tom na aký vlak ide:
	- ,,Idem osobákom z Peznika na Hlavnú."
	- ,,Pôjdem Považanom po 13tej"

Takže cestujúci 