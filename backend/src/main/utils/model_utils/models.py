from django.db import models 

class BaseModel(models.Model):
    '''an abstract model that contains all common properties for other models'''
    id = models.BigAutoField(primary_key=True)
    date_created = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True