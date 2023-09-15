---
layout: default
title: Aspirations of a Software Developer
---
# {{ page.title }}

{% if site.posts.size > 0 %}
## Latest Posts
{% for post in site.posts %}

{% assign date_format = site.date_format | default: "%b %-d, %Y" %}
<span>{{ post.date | date: date_format }}</span>
## [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}

{% endfor %}
{% endif %}