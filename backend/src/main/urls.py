from django.urls import path
from django.http import HttpResponse

url_patterns = [
    path("api/", lambda req: HttpResponse("Dummy api view for now"), name="api")
]