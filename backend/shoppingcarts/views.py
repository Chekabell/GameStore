from rest_framework import generics

from .models import ShoppingCart
from .serializers import ShoppingCartSerializer


class ShoppingCartAPIView(generics.ListCreateAPIView):
    serializer_class = ShoppingCartSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return WishList.objects.filter(user_id=id)