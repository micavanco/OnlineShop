from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.models import User
from .models import Product
from .serializers import UserSerializer, ProductSerializer
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt


def index(request):
    return HttpResponse("<h1>Hello from index</h1>")


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# APIS
# /shops/

@csrf_exempt
def products_list(request):
    # Get All
    if request.method == 'GET':
        products = Product.objects.all()
        products_serializer = ProductSerializer(products, many=True)
        return JsonResponse(products_serializer.data, safe=False)

    # Add one
    if request.method == 'POST':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse(product_data.data, status=status.HTTP_201_CREATED)
        return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete All
    if request.method == 'DELETE':
        Product.objects.all().delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

@csrf_exempt
def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    # Retrieve one
    if request.method == 'GET':
        product_serializer = ProductSerializer(product)
        return JsonResponse(product_serializer.data)

    # Update one record
    if request.method == 'PUT':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse(product_serializer.data)
        return JsonResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete one record
    if request.method == 'DELETE':
        product.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
