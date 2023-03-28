from django.contrib import admin
from .models import Social, Link, Event
from django.contrib.auth.models import Group


# Register your models here.
admin.site.register(Social)
admin.site.register(Link)
admin.site.register(Event)

# unregister the Group model from admin.
admin.site.unregister(Group)