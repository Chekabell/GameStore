from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import ShoppingCart
from .serializers import ShoppingCartSerializer


class ShoppingCartAPIView(generics.ListCreateAPIView):
    serializer_class = ShoppingCartSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        id = self.kwargs['id']
        return ShoppingCart.objects.filter(user_id=id)