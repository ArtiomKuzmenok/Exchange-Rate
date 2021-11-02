import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSort } from '../../hooks/useSort';
import MyButton from '../UI/button/MyButton';
import Select from './Select/Select';
import SortSelect from './SortSelect/SortSelect';
import './Settings.scss';

const SettingsPage = ({ data, content, setContent }) => {

  const [choosen, setChoosen] = useState([])
  const [sort, setSort] = useState('')
  const sorted = useSort(sort, choosen)

  useEffect( () => {
    setChoosen([...content])
  }, [content])

  function contentCheck(obj) {
    if (choosen.includes(obj)) {
      return
    } else {
      setChoosen([...choosen, obj])
    }
  }

  function deleteItem(element) {
    setContent(choosen.filter( el => el.Cur_ID !== element.Cur_ID))
  }

  function acceptChanges() {    
    setContent([...sorted])
  }
  
  return ( 
    <div className="container">
      <div className="settings">
        <Select data={data} contentCheck={contentCheck}/>
        <div className="settings__choosen">
          <div className='title'>Selected currencies</div>
            <div className='currenciesALL'>
              {choosen.map( item => {
                return (
                  <div key={item.Cur_ID} className='currency__choosen'>
                    <div className="currency__choosen_abr">{item.Cur_Abbreviation}</div>
                    <MyButton className="currency__choosen_delete" cb={deleteItem} param={item} text="delete"/>
                  </div>         
                )
              })}
            </div>  
        </div>    
      </div>
      <SortSelect className={'sort_select'} value={sort} onChange={selectedSort => setSort(selectedSort)} defaultValue="Sorting" 
        options={[
          {value: 'Alphabet', name: 'Alphabetically'},
          {value: 'Ascending', name: 'Ascending'},
          {value: 'Descending', name: 'Descending'},
      ]}/>
      <Link to="/exchange" className="link">
        <MyButton className="btn_accept" text="ACCEPT" cb={acceptChanges}/>
      </Link>    
    </div>
    
   );
}
 
export default SettingsPage;