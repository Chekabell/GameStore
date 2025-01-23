from django.contrib import admin

from .models import Game, Language, Tag, Genre, Publisher, Developer

admin.site.register(Game)
admin.site.register(Tag)
admin.site.register(Language)
admin.site.register(Genre)
admin.site.register(Publisher)
admin.site.register(Developer)
