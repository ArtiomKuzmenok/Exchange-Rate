import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import Navbar from './components/NavBar/NavBar';
import { useLoadContent } from './hooks/useLoadContent';
import './App.scss'

function App() {
  const [fetching, getContent] = useLoadContent()
  const [content, setContent] = useState([])
  
  useEffect( () => {
    getContent()
  }, [getContent])

  function updateContent() {
    setContent([])
    const choosenCurrency = []
    content.forEach( item => {
      choosenCurrency.push(item.Cur_Abbreviation)
    })
    choosenCurrency.forEach( currency => {
      fetching
      .filter( item => item.Cur_Abbreviation === currency)
      .forEach( filtered => {
        setContent( prev => [...prev, filtered])
      })
    })    
  }

  function createDefaultContent() {
    const defaultContent = ["USD", "EUR", "RUB"]
    fetching.forEach( item => {
      if (defaultContent.includes(item.Cur_Abbreviation)) {
        setContent( prev => [...prev, item])        
      }   
    })
  }

  useEffect( ()=> {
    if (content.length !== 0) {
      updateContent()
    } 
    if (content.length === 0) {
      createDefaultContent()
    }    
  }, [fetching])

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />
        <AppRouter data={fetching} content={content} setContent={setContent} update={getContent}/>             
      </BrowserRouter>
    </div>
    
  );
}

export default App;
