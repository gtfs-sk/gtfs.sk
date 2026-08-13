---
layout: layouts/base.njk
title: GTFS.sk Bots and their User Agents
---

# Has our bot been annoying your servers?

GTFS.sk is a comunity driven effort to collect and publish open data about public transport in Slovakia. We have a few bots that crawl the web and collect data from various sources, including official websites of transport operators, open data portals, and other sources.

Our bots are designed to be polite and respectful of the websites they crawl. They identify themselves with a unique User Agent string, which includes the name of the bot and a link to this page. If you see our bot in your server logs, please know that it is not malicious and is only collecting data for the benefit of the public.

## This is how a user agent of our bot looks like:

```
gtfs-sk/1.0 (kompa-vojka, this bot checks for service avability +https://gtfs.sk/ua)
             \---------/
             effort name
```

`effort name` is the name of the specific GTFS.sk effort that the bot is working for. For example, [`kompa-vojka`](https://github.com/gtfs-sk/kompa-vojka) is the name of the effort that collects data about the ferry service between Vojka nad Dunajom and Kyselica. Our efforts usually have a dedicated Repository located on Github where you can find more information about the effort, including the source code of the bot, the data it collects, and how to contribute.

## Don't want your server to be crawled by our bots?

If you don't want our bots to crawl your server, please contact us at [feed_info@gtfs.sk](mailto:feed_info@gtfs.sk), and try to publish a GTFS feed of your own. We are happy to help you with that, and we can also add your feed to our registry of feeds.