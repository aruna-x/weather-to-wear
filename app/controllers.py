from flask import Blueprint, render_template, jsonify, request
from dotenv import load_dotenv
from app.services.weather import Weather
from app.services.openai import Openai

main = Blueprint('main', __name__)

load_dotenv()

@main.route('/')
def index():
  return render_template('main.html')

@main.route('/rec', methods = ['POST'])
def get_rec():
  print('HERE ...')
  city = request.json.values()
  print(city)
  weather = Weather()
  resp = weather.get_weather(city)

  if resp.status_code == 200:
    weather = resp.json()
    openai = Openai()
    rec = openai.get_chat_rec(weather)
    print(rec)
    return jsonify(rec.choices[0].message.content)
  
  else:
    print(f'Danger Will Robinson: {resp.status_code}')
    return 'Oops, there was an error!', resp.status_code
