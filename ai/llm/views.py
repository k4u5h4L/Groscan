from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.cache import cache_page

from llm.models import Request
from llm.serializers import RequestSerializer
from server import settings
# Create your views here.

cache_timeout = 60


@api_view(['GET'])
# @ratelimit(key='ip', rate='500/h')
def api_overview(request):
    api_urls = {
        'Get instructions': 'GET /',
        'Get recipe for ingredient list': 'POST /recipes',
    }

    return Response(api_urls)


@api_view(['POST'])
# @ratelimit(key='ip', rate='500/h')
def get_recipes(request):
    asset = RequestSerializer(data=request.data)

    if asset.is_valid():
        asset.save(created_by=request.user, update_by=request.user)
        return Response(asset.data, status=status.HTTP_201_CREATED)
    else:
        print(asset.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)