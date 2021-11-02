import React from 'react';
import MyButton from '../../UI/button/MyButton';
import './CurrencyElement.scss';

const CurrencyElement = ({ item, copyText }) => {

  const itemText = `${item.Date} ${item.Cur_Scale} ${item.Cur_Abbreviation} (${item.Cur_Name}) - ${item.Cur_OfficialRate} BYN`;

  return ( 
    <li className="currencyAll_item" >
      <div className="itemText">{itemText}</div>
      <MyButton cb={copyText} param={itemText} text="Copy to clipboard"/>
    </li>
   );
}
 
export default CurrencyElement;