from django.db import models

# Create your models here.

class Social(models.Model):
    name = models.CharField(max_length=50)
    path = models.CharField(max_length=50)
    link = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Link(models.Model):
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=100)
    pathLogo = models.CharField(max_length=100)
    pathLogoHover = models.CharField(max_length=100)
    pathImg = models.CharField(max_length=100)

    def __str__(self):
        return self.name