import os
import openai

def get_chat_rec(weather):
  # use requests.session?
  openai.api_key = os.getenv('OPENAI_KEY')
  prompt = f'What would you recommend wearing in this weather? {weather}'
  return openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "user", "content": prompt},
    ]
  )
