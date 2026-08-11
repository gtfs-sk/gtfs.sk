---
layout: layouts/base.njk
title: gtfs.sk
---
<section class="hero">
  <div class="hero-inner">
    <div class="hero-text">
      <img class="hero-logo" src="/assets/logo.svg" alt="gtfs.sk">
      <p class="hero-lead">Zbierame otvorené dáta o verejnej doprave na Slovensku.</p>
      <p class="hero-lead">Vlaky, autobusy, električky, kompy, lanovky, bicykle, kolobežky, a aj pešibus krásne strojovo čitateľné</p>
      <a class="btn btn-primary" href="#feedy">Dáta →</a>
    </div>
    <!--<div class="hero-graphic">
      <img src="/assets/slovakia-outline.svg" alt="">
      <span class="sr-only">Mapa trás — čoskoro</span>
    </div>-->
  </div>
</section>

<section class="info-grid">
  <div class="info-card">
    <h2>Dáta</h2>
    <p>Aktuálne publikované feedy vo strojovo čitateľných formátoch.</p>
    <a class="btn btn-primary" href="#feedy">Dáta →</a>
  </div>
  <div class="info-card">
    <h2>Chcem GTFS</h2>
    <p>Navigácia v Google Maps či iných aplikáciach, alebo splnenie EU Regulation 2017/1926</p>
    <a class="btn btn-primary" href="/guide/">Návod →</a>
  </div>
  <div class="info-card">
    <h2>Kvalita</h2>
    <p>Vidíme veľa dát, ale sú tie dáta aj použiteľné? Pri každom feede to hodnotíme.</p>
    <a class="btn btn-primary" href="/feeds/mhd-presov/">Príklad →</a>
  </div>
</section>

<section class="feed-section" id="feedy">
  <h2>Publikované feedy</h2>
  <div class="feed-grid">
    {%- for feed in feeds %}{% if feed.status == "published" %}
    <div class="feed-card">
      <span class="badge">{{ feed.route_type }}</span>
      <span class="badge badge-format">{{ feed | formatLabel }}</span>
      <h3><a class="feed-card-link" href="/feeds/{{ feed.slug }}/">{{ feed.name }}</a></h3>
      <p class="feed-card-region">{{ feed.region }}</p>
    </div>
    {%- endif %}{% endfor %}
  </div>
</section>
