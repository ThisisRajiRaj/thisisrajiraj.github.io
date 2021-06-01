
## Welcome to my blog. Here is a list of my latest writing.
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} </a> on {{ post.date | date_to_string }}
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
#### Thank you, and hope you enjoy what I have to share! <3

