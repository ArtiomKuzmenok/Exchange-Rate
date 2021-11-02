import React from 'react';
import MyButton from '../UI/button/MyButton';
import CurrencyElement from './CurrencyElement/CurrencyElement';
import './ExchangeRate.scss';

const ExchangeRate = ({ content, update }) => {

  function copyItemText(text) {
    navigator.clipboard.writeText(text)
  }
  
  return ( 
    <div className="container_data">
      <ul className="currencyAll">
        {
        content.map( item => {
          return (
            <CurrencyElement item={item} key={item.Cur_ID} copyText={copyItemText}/>
          )
        })
        }
      </ul>
      <MyButton className="btn_update" text="Update" cb={update}/>
    </div>    
   );
}
 
export default ExchangeRate;