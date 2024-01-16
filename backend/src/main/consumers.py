from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async, async_to_sync
import json


class TownHallConsumer(AsyncWebsocketConsumer):
    '''
    default consumer that listens on the queues(channels) of
    each connecting clients, and handles their respective websocket/interprocess communication
    '''

    def connect(self):
        print(f"user: {self.scope.get('user')} just connected!")
        return super().connect()

    def receive(self, text_data=None, bytes_data=None):
        return super().receive(text_data, bytes_data)


    def single_queue(self, event):
        data = json.loads(event)
        return print(f"data received from a user queue/channel... {data}")
    
    def disconnect(self, code):
        return super().disconnect(code)