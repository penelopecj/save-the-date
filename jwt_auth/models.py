from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
  email = models.CharField(max_length=50, unique=True)
  first_name = models.CharField(max_length=50, blank=True)
  last_name = models.CharField(max_length=50, blank=True)
  address = models.CharField(max_length=100, blank=True)
  phone_number = models.CharField(max_length=50, blank=True)
  is_attending = models.BooleanField(default=False)
  party_size = models.PositiveIntegerField
  is_vegetarian = models.BooleanField(default=False)
  is_vegan = models.BooleanField(default=False)
  is_kosher = models.BooleanField(default=False)
  is_gluten_free = models.BooleanField(default=False)
  allergies = models.CharField(max_length=200)

  def __str__(self):
    return f"{self.first_name} {self.last_name} - party of {self.party_size}"