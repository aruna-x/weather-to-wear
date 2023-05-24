import React, { useState } from 'react';
import styled from 'styled-components';
import PlacesAutocomplete from 'react-places-autocomplete';
 
function LocationSearchInput() {
  const [address, setAddress] = useState('')
  function handleChange(address) {
    setAddress(address)
  };

  function handleSelect(address) {
    setAddress(address);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <StyledInput {...getInputProps({placeholder: 'Enter your location (e.g. city) ...'})}/>
          <div>
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                // style me! :)
                <div {...getSuggestionItemProps(suggestion, { className, style })}>
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
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
