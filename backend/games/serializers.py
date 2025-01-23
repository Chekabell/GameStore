from rest_framework import serializers

from .models import Game, Tag, Genre, Language, Publisher, Developer


class GameSerializer(serializers.ModelSerializer):
    tags = serializers.SlugRelatedField(many=True, queryset=Tag.objects.all(), slug_field='name')
    genres = serializers.SlugRelatedField(many=True, queryset=Genre.objects.all(), slug_field='name')
    languages = serializers.SlugRelatedField(many=True, queryset=Language.objects.all(), slug_field='name')
    publisher = serializers.SlugRelatedField(many=False, queryset=Publisher.objects.all(), slug_field='name')
    developer = serializers.SlugRelatedField(many=False, queryset=Developer.objects.all(), slug_field='name')

    class Meta:
        model = Game
        fields = '__all__'

class GameSerializerForWishlists(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title', 'image', 'cost', 'rating']

class GameSerializerForShoppingCart(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title', 'image', 'cost']