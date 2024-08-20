import React from 'react';

export const DropDown = ({
  options = [],
  id,
  label,
  name,
  selected,
  ...rest
}) => {
  if (options.length === 0) return <></>;

  const dropDownOptions = options.map((option, index) => {
    return (
      <option
        value={option.value}
        key={index}
        disabled={option?.disabled || false}
      >
        {option.name}
      </option>
    );
  });

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={selected}
        {...rest}
        className="text-black"
      >
        {dropDownOptions}
      </select>
    </div>
  );
};
