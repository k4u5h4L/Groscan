from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class Request(models.Model):
    def validate_productivity_rating(productivity_rating):
        if not 0 < productivity_rating <= 5:
            raise ValidationError(
                f'Some validation error thrown : {productivity_rating}')

    request_text = models.CharField(max_length=100)
    response_text = models.CharField(max_length=1000)
    # productivity_rating = models.IntegerField(
    #     validators=[validate_productivity_rating])

    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'request : {self.request_text}'
