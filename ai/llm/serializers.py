from django.db.models import fields
from rest_framework import serializers

from .models import Request


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = ['request_text', 'response_text']