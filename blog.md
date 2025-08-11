---
layout: default
title: Blog
permalink: /blog/
---

<section class="section">
  <div class="container">
    <h1>Blog</h1>
    <p>Posts on this site, my <a href="https://medium.com/version-1" target="_blank" rel="noopener">Medium</a> articles, and the <a href="{{ '/diaries/' | relative_url }}">Certification Diaries</a> series.</p>

    <h2>Latest on this site</h2>
    <div class="list">
      {% for post in site.posts %}
      <article class="post-item">
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html }}</p>{% endif %}
      </article>
      {% endfor %}
      {% if site.posts == empty %}<p>No local posts yet.</p>{% endif %}
    </div>

    <h2>Certification Diaries</h2>
    <ul class="list">
      {% assign d = site.diaries | sort: 'date' | reverse %}
      {% for p in d %}
        <li class="post-item"><a href="{{ p.url | relative_url }}">{{ p.title }}</a> <small>({{ p.date | date: "%B %d, %Y" }})</small></li>
      {% endfor %}
      {% if d == empty %}<li class="post-item">No diary entries yet.</li>{% endif %}
    </ul>

    <h2>Medium (auto‑imported)</h2>
    <ul class="list">
      {% for m in site.data.medium | slice: 0, 10 %}
        <li class="post-item"><a href="{{ m.link }}" target="_blank" rel="noopener">{{ m.title }}</a> <small>({{ m.pubDate | date: "%B %d, %Y" }})</small></li>
      {% endfor %}
      {% if site.data.medium == nil %}<li class="post-item">Medium feed will appear after the first sync.</li>{% endif %}
    </ul>
  </div>
</section>
