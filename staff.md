---
layout: default
title: Authors
---

{% for author in site.authors %}
## [{{ author.name }}]({{ author.url }})
### {{ author.email }}
{{ author.content | markdownify }}
{% endfor %}