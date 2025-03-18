---
layout: default
title: Authors
---

{% for author in site.authors %}
## [{{ author.name }}]({{ author.url }})
### Pronouns: {{ author.pronouns }}
### Email: {{ author.email }}
### Blue Sky: [{{ author.bluesky }}](https://bsky.app/profile/jearil.bsky.social)
### Twitter: [{{ author.twitter }}](http://www.twitter.com/{{ author.twitter }})
### Mastadon: [{{ author.mastadon }}]({{ author.mastadon }})
### LinkedIn: [{{ author.linkedin }}]({{ author.linkedin }})
<hr>
{{ author.content | markdownify }}
{% endfor %}