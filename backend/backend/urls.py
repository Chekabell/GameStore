"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from games.views import GameViewSet
from users.views import UserViewSet

from wishlists.views import WishListAPIView
from shoppingcarts.views import ShoppingCartAPIView

router = routers.DefaultRouter()
router.register('games', viewset = GameViewSet)
router.register('users', viewset = UserViewSet)
print(router.urls)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/shoppingcarts/', ShoppingCartAPIView.as_view()),
    path('api/shoppingcarts/<int:id>/', ShoppingCartAPIView.as_view()),
    path('api/wishlists/', WishListAPIView.as_view()),
    path('api/wishlists/<int:id>/', WishListAPIView.as_view()),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
