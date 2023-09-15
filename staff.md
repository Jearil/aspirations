---
layout: default
title: Authors
---

{% for author in site.authors %}
## [{{ author.name }}]({{ author.url }})
### Pronouns: {{ author.pronouns }}
### Email: [{{ author.email }}](mailto:{{ author.email }})
### Twitter: [{{ author.twitter }}](http://www.twitter.com/{{ author.twitter }})

{{ author.content | markdownify }}
{% endfor %}