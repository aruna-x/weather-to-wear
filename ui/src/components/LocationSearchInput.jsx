import React from 'react';
import styled from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';
 
function LocationSearchInput({city, setCity}) {
  const searchOptions = {
    types: ['(cities)'],
  }

  function handleChange(city) {
    setCity(city)
  }

  function handleSelect(city) {
    setCity(city);
  }

  return (
    <PlacesAutocomplete
      value={city}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <StyledInput {...getInputProps({placeholder: 'Enter your location (e.g. city) ...'})}/>
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => (
              <DropdownItem key={suggestion.description} {...getSuggestionItemProps(suggestion)}>
                <span>{suggestion.description}</span>
              </DropdownItem>
            ))}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput;

const StyledInput = styled.input`
  padding: 13px;
  border: 1px solid #373737;
  outline: 0;
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  width: 20em;
`

const DropdownItem = styled.div`
  width: 25vw;
  margin: 7px auto;
  padding: auto;
  background-color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`
