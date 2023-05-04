import os
import openai

class Openai:
  def __init__(self):
    openai.api_key = os.getenv('OPENAI_KEY')

  def send_prompt(self, prompt):
    return openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=[
        {"role": "user", "content": prompt},
      ]
    )
  
  def get_chat_rec(self, weather):
    prompt = f'What would you recommend wearing in this weather? {weather}'
    return self.send_prompt(prompt)
