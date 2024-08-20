'use client';

import { DropDown } from './dropdown';
import React, { useCallback } from 'react';
import { useLocationStore } from './wrapper';

const locationTypeOptions = [
  {
    name: 'Residence',
    value: 'RESIDENCE',
  },
  {
    name: 'Business',
    value: 'BUSINESS',
  },
  {
    name: 'Funeral Home',
    value: 'FUNERAL_HOME',
  },
  {
    name: 'Church',
    value: 'CHURCH',
  },
  {
    name: 'Hospital',
    value: 'HOSPITAL',
  },
  {
    name: 'School',
    value: 'SCHOOL',
  },
  {
    name: 'Other',
    value: 'OTHER',
  },
];

export const LocationType = () => {
  const { locationTypeValue, setLocationType } = useLocationStore(
    (state) => state
  );

  const onChange = useCallback((event) => {
    const locationType = event.target.value;
    setLocationType(locationType);
  }, []);

  return (
    <>
      <DropDown
        options={locationTypeOptions}
        id="location"
        label="Location Type"
        name="location"
        selected={locationTypeValue}
        onChange={onChange}
      />
      {locationTypeValue === 'BUSINESS' && (
        <input
          id="business-name"
          name="business-name"
          type="text"
          placeholder="Business Name"
          className="text-black"
        />
      )}
    </>
  );
};
