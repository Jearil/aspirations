---
layout: default
title: Authors
---

{% for author in site.authors %}
## [{{ author.name }}]({{ author.url }})
### Pronouns: {{ author.pronouns }}
### Email: {{ author.email }}
### Twitter: [{{ author.twitter }}](http://www.twitter.com/{{ author.twitter }})
### Mastadon: [{{ author.mastadon }}]({{ author.mastadon }})
<hr>
{{ author.content | markdownify }}
{% endfor %}