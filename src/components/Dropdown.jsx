import React, { useState, useEffect, Fragment } from 'react';
import { nanoid } from 'nanoid';

const DropDown = ({ label, name, defaultValue = '', required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsSelect = [
    ['', 'Seleccione una opción', true],
    ...Object.entries(options),
  ];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    <Fragment>
      <label htmlFor={name} className="flex flex-col my-3">
        <span className="pb-2 text-sm font-bold text-gray-800">{label}</span>
        <select
          required={required}
          name={name}
          className="input"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {optionsSelect.map((o) => (
            <option key={nanoid()} value={o[0]} disabled={o[2] ?? false}>
              {o[1]}
            </option>
          ))}
        </select>
      </label>
    </Fragment>
  );
};


const DropDownRg = ({ label, name, defaultValue = '', required, options }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const optionsSelect = [
    ['', 'Seleccione un Rol:', true],
    ...Object.entries(options),
  ];
  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);
  return (
    <Fragment>
      <label htmlFor={name} className="flex flex-col my-3">
        <span className="pb-2 text-sm font-bold text-black">{label}</span>
        <select
          required={required}
          name={name}
          className="registro-input m-2"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {optionsSelect.map((o) => (
            <option key={nanoid()} value={o[0]} disabled={o[2] ?? false}>
              {o[1]}
            </option>
          ))}
        </select>
      </label>
    </Fragment>
  );
};


export { DropDown, DropDownRg  };