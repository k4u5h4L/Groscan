from django.contrib import admin

from llm.models import Request
# Register your models here.


# admin stuff
name = "Groscan"
admin.site.site_header = f"{name} Admin"
admin.site.site_title = f"{name} Admin Portal"
admin.site.index_title = f"Welcome to {name} Portal"


admin.site.register(Request)
