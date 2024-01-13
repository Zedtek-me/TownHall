from django.urls import path
from django.http import HttpResponse

urlpatterns = [
    path("api/", lambda req: HttpResponse("Dummy api view for now"), name="api")
]