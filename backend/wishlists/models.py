from django.contrib.auth.models import User
from django.db import models

from games.models import Game


class WishList(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    game_id = models.ManyToManyField(Game)
    def __str__(self):
        return str(self.user_id)