from django.contrib.auth.models import User
from rest_framework import serializers
from server.onlineshop.shops.models import Product


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email')


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'price', 'title', 'description', 'category')
