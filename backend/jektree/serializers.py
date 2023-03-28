from rest_framework import serializers
from .models import *

class SocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = "__all__"

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = "__all__"

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
