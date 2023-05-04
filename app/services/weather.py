import requests
import os

class Weather:
  def __init__(self):
    self.WEATHER_KEY = os.getenv('WEATHER_KEY')

  def get_weather(self, location):
    url = f'http://api.weatherapi.com/v1/current.json?key={self.WEATHER_KEY}&q={location}&aqi=yes'
    return requests.get(url)
