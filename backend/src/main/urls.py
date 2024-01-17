from django.urls import path
from django.http import HttpResponse
from .views import template_rendering

urlpatterns = [
    path("api/", lambda req: HttpResponse("Dummy api view for now"), name="api"),
    path("", template_rendering, name="test_template")
]