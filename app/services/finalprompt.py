def build(weather):
      uv_recs_2 = '''UV Index Ranges: Low (less than 2), Moderate (3-5), High (6-7), Very High (8-10), Extreme (11+).'''

      return f'''What would you recommend wearing in this weather? {weather}.
            Keep in mind these UV Index ranges: {uv_recs_2}. 
            It is okay not to mention uv if it is in the low range.'''
