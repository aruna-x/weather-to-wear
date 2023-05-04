from flask import Blueprint, render_template
from dotenv import load_dotenv
from app.services.weather import Weather
from app.services.openai import Openai

main = Blueprint('main', __name__)

load_dotenv()

@main.route('/')
def index():
  return render_template('main.html')

@main.route('/rec')
def get_rec():
  # location = request.form['location']

  location = '93730'
  weather = Weather()
  resp = weather.get_weather(location)

  if resp.status_code == 200:
    weather = resp.json()
    openai = Openai()
    rec = openai.get_chat_rec(weather)
    return render_template('rec.html', rec=rec.choices[0].message.content)
  
  else:
    print(f'Danger Will Robinson: {resp.status_code}')
    return 'Oops, there was an error!', 400
