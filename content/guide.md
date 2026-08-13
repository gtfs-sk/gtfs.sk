---
layout: layouts/base.njk
title: Ako vytvoriť GTFS pre svoju obec/dopravcu
---

# Ako vytvoriť GTFS?

Dnes už existuje množstvo postupov ako preklopiť už existujúce dáta (napr. vo formáte JDF) do publikovateľného GTFS. Môžete tak využiť platených služieb od poskytovateľov Backofficov, alebo bezplatných nástrojov s otvoreným jadrom (napr [jdf2gtfs](https://github.com/0Charliecat/jdf2gtfs)).

## Kde sa vaše dáta zobrazia

Keď zverejníte GTFS feed, vaše spoje sa môžu objaviť priamo v aplikáciách, ktoré ľudia už bežne používajú na plánovanie cesty — bez toho, aby ste museli stavať vlastnú appku:

- [Google Maps](https://www.google.com/maps)
- [Apple Maps](https://www.apple.com/maps/)
- [Transit](https://transitapp.com)
- [Citymapper](https://citymapper.com)
- [Catenary Maps](https://catenarymaps.org)

## Čo je potrebné?

GTFS feed potrebuje nasledujúce typy dát:
- polohy zastávok, označníkov zastávok, náštupišt
- linky a ich trasy
- "časy zastávok" (z JDF poznáme ako CASSPOJE)

Ak chcete vaše dáta povzdvihnút dalej, môžete pridať:
- informácie o garantovaných prestupoch (transfers.txt)
- informácie o cestovnom (GTFS-Fares v1/v2)
- živé informácie o meškaní a polohe vozidiel na trasách (GTFS-RT)

## Ďalšie zdroje

Základná dokumentácia:

- [GTFS: Getting Started (gtfs.org)](https://gtfs.org/getting-started/create/) — oficiálny návod, ako od nuly vytvoriť GTFS feed.
- [GTFS 101 — a guide to high-quality transit data (MobilityData)](https://mobilitydata.org/gtfs-101-a-guide-to-high-quality-transit-data/) — čo robí GTFS feed skutočne kvalitným, nielen technicky validným.

### Dokumentácia pre konkrétne aplikácie (GTFS Consumer App Guidance)

Okrem všeobecnej GTFS špecifikácie majú viaceré veľké platformy vlastné doplňujúce požiadavky a odporúčania pre dopravcov, ktorí chcú byť u nich zobrazení:

- [Google Transit Developers](https://developers.google.com/transit/gtfs/) — doplňujúca dokumentácia GTFS špecifická pre Google.
- [Transit app — Guidelines for Producing GTFS Static Data](https://resources.transitapp.com/article/458-guidelines-for-producing-gtfs-static-data-for-transit) — doplňujúca dokumentácia špecifická pre aplikáciu Transit.
- [Bing Maps Transit](https://www.bing.com/maps/transitcontentproviders) — ako pridať svoje dáta do Bing Maps.
- [Yandex Maps — Transport integration](https://yandex.ru/support/m-maps/transport.html?lang=en#connect-display) — doplňujúca dokumentácia špecifická pre Yandex.

## Ako feed publikovať

Najlepšie je publikovať `gtfs.zip` na **stálej (statickej) URL adrese**, ktorá sa nemení medzi verziami — konzumenti (Google, Transit app, gtfs.sk aj ďalší) si feed sťahujú pravidelne sami, adresa sa preto meniť nemá, mení sa iba obsah súboru.

K feedu odporúčame pridať otvorenú licenciu — ideálne **CC BY 4.0** (stačí uviesť zdroj, dáta je možné voľne používať aj komerčne). Bez explicitne uvedenej licencie si mnohé aplikácie a vývojári nemôžu byť istí, či dáta vôbec smú použiť, a radšej ich nepoužijú.

Navyše sa oplatí:

- **zaregistrovať feed do [Mobility Database](https://database.mobilitydata.org/)** — otvoreného katalógu GTFS/GBFS feedov, cez ktorý vás nájdu desiatky navigačných aplikácií aj výskumníkov,
- **publikovať feed aj na Open Data portáli objednávateľa dopravy** (kraj, mesto) — napr. [data.slovensko.sk](https://data.slovensko.sk) — feed tak nájdu aj tí, čo ho hľadajú priamo tam, nielen cez gtfs.sk.

Ak váš feed spĺňa vyššie uvedené — stála URL, otvorená licencia, registrácia v Mobility Database a/alebo na Open Data portáli — radi ho pridáme na gtfs.sk.

## Potrebujete pomoc?

Nemusíte to riešiť sami. Radi pomôžeme s vytvorením GTFS dát od nuly, so zvýšením kvality existujúceho feedu, aj s jeho publikovaním pre konkrétne platformy (Google, Transit, Mobility Database...).

Napíšte nám na **[feed_info@gtfs.sk](mailto:feed_info@gtfs.sk)**.
