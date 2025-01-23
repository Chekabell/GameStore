from rest_framework import serializers

from .models import WishList
from games.serializers import GameSerializerForWishlists


class WishListSerializer(serializers.ModelSerializer):
    game_id = GameSerializerForWishlists(read_only=True, many=True )
    class Meta:
        model = WishList
        exclude = ('id','user_id',)