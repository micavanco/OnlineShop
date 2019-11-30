from django.db import models


# Create your models here.
class Product(models.Model):
    price = models.BigIntegerField()
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=300)
    category = models.CharField(max_length=200)
