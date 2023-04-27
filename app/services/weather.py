import requests
import os


def get_weather(location):
  # use requests.session?
  WEATHER_KEY = os.getenv('WEATHER_KEY')
  url = f'http://api.weatherapi.com/v1/current.json?key={WEATHER_KEY}&q={location}&aqi=yes'
  return requests.get(url)
    