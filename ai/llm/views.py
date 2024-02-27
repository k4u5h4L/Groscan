from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.cache import cache_page
from django.core.cache import cache

from llm.models import Request
from llm.serializers import RequestSerializer
from server import settings
# Create your views here.

cache_timeout = 60 * 60 * 15


@api_view(['GET'])
# @ratelimit(key='ip', rate='500/h')
@cache_page(cache_timeout)
def api_overview(request):
    api_urls = {
        'Get instructions': 'GET /',
        'Get recipe for ingredient list': 'POST /recipes',
    }

    return Response(api_urls)


@api_view(['POST'])
# @ratelimit(key='ip', rate='500/h')
def get_recipes(request):
    # asset = RequestSerializer(data=request.data)
    prompt = request.data['prompt']
    print(f'prompt: {prompt}')

    res = None
    sentinel = None
    if cache.get(prompt, sentinel) is sentinel: # not in cache
        print("NOT FOUND IN CACHE")
        response = "hello, world!"

        cache.set(prompt, response, cache_timeout)
        res = response
    else:
        res = cache.get(prompt)


    # if asset.is_valid():
    #     asset.save(created_by=request.user, update_by=request.user)
    #     return Response(asset.data, status=status.HTTP_201_CREATED)
    # else:
    #     print(asset.errors)
    #     return Response(status=status.HTTP_400_BAD_REQUEST)
    return Response(res, status=status.HTTP_201_CREATED)