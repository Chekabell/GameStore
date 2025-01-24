from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import WishList
from .serializers import WishListSerializer


class WishListAPIView(generics.ListCreateAPIView):
    serializer_class = WishListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        id = self.kwargs['id']
        return WishList.objects.filter(user_id=id)
