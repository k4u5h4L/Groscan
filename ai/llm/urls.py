from django.urls import path
from . import views as api_views

urlpatterns = [
    path('', api_views.api_overview, name='api-overview'),
    path('recipes/', api_views.get_recipes, name='get-recipes'),
]
