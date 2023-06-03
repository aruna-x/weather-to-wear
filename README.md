# Weather to Wear

## Spin 'er up!

- `npm start` (vite) from `/ui`
- `flask run` from root

## UX

- Prompts user for location
- Provides autocomplete
- Displays a recommendation of what to wear in that location today

## Integrations

- openai using `gpt-3.5-turbo`
- weatherapi
- google places api via `react-places-autocomplete`

## Extended features (WIP)

- daily email subscription
- share options
- convert to chatbot

## Notes

- The Google Cloud API key used for this project has to be publicly exposed via `index.html`. Go to the Google Console, generate a key, add Geocoding API, Maps JavaScript API, Places API, add restrictions for safety, then place your key on line 13 of `index.html`.
