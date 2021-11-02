import React from 'react';
import './SortSelect.scss';

const SortSelect = ({ options, value, onChange, defaultValue, className }) => {
  return ( 
    <select className={className} value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
   );
}
 
export default SortSelect;