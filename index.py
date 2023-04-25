# pipenv --python 3.11
# flask --app index run
from flask import Flask, jsonify, request
import requests
import os
from dotenv import load_dotenv
import openai

load_dotenv()

app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'helloooo, world!'

@app.route('/rec')
def get_rec():
  # location = request.form['location']
  location = '93730'
  weather_key = os.getenv('WEATHER_KEY')
  url = f'http://api.weatherapi.com/v1/current.json?key={weather_key}&q={location}&aqi=yes'
  resp = requests.get(url)

  if resp.status_code == 200:
    prompt = f'What would you recommend wearing in this weather? {resp.json()}'
    openai.api_key = os.getenv('OPENAI_KEY')
    rec = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "user", "content": prompt},
      ]
    )
    return rec.choices[0].message.content
  else:
    print(f'Danger Will Robinson: {resp.status_code}')
    return '', 400
