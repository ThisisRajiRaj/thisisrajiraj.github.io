
## Here is a list of my latest writing
<ul>
  {% for post in site.posts reversed %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} on {{ post.date }}</a>
    </li>
  {% endfor %}
</ul>
#### Thank you, and hope you enjoy what I have to share! <3

