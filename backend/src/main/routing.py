from django.urls import re_path
from .consumers import TownHallConsumer

chat_routes = [
    re_path("^chat/$", TownHallConsumer.as_asgi(), name="townhall_consumer")
]