import React, { useRef, useState } from 'react';
import './Select.scss';

const Select = ({ data, contentCheck }) => {
  const [query, setQuery] = useState('')
  const select = useRef();

  function SelectVisible() {
    select.current.classList.add('selector_active')
  }

  function SelectUnvisible() {
    select.current.classList.remove('selector_active')
  }

  return ( 
    <div className="select">
      <input className="query" type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Enter currency"/>
      <div ref={select} className="selector_active">
        {data
        .filter(item => item.Cur_Abbreviation.includes(query.toUpperCase()) || item.Cur_Name.toUpperCase().includes(query.toUpperCase()))
        .map( item => {
          return (
            <div key={item.Cur_ID} onClick={() => contentCheck(item)}>
              <div className="selector_item">{item.Cur_Abbreviation} ({item.Cur_Name})</div>
            </div>
          )
        })}
      </div>
    </div>
   );
}
 
export default Select;