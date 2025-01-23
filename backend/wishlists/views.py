from rest_framework import generics

from .models import WishList
from .serializers import WishListSerializer


class WishListAPIView(generics.ListCreateAPIView):
    serializer_class = WishListSerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return WishList.objects.filter(user_id=id)
