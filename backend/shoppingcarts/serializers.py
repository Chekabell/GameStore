from rest_framework import serializers

from games.serializers import GameSerializerForShoppingCart

from .models import ShoppingCart


class ShoppingCartSerializer(serializers.ModelSerializer):
    game_id = GameSerializerForShoppingCart(read_only=True, many=True )
    class Meta:
        model = ShoppingCart
        exclude = ('id','user_id',)