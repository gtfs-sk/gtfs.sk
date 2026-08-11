# gtfs.sk

Otvorené GTFS dáta pre slovenskú verejnú dopravu. Statický web (Eleventy, markdown + JSON), deployovaný na Cloudflare Pages.

## Vývoj

```sh
npm install
npm start
```

## Build

```sh
npm run build
```

Vygeneruje `_redirects` z `_data/redirects.json` a postaví web do `_site/`.
