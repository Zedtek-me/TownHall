from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from main.serializers import UserSerializer
from django.shortcuts import render
# Create your views here.

def template_rendering(request):
    return render(request, "index.html")

@api_view(["POST"])
def create_user(request):
    data = request.data
    serialized_data = UserSerializer(data=data)
    if serialized_data.is_valid(raise_exception=True):
        serialized_data.save()
        return Response(serialized_data.data, status=status.HTTP_200_OK)
    
