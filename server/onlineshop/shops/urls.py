
from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

urlpatterns = [
  # path('', views.index, name='index'),
  path('', include(router.urls))
]
