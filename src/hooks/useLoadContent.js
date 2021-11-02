import axios from "axios";
import { useState, useCallback } from "react"

export const useLoadContent = () => {
  
  const [content, setContent] = useState([]);
  const getContent = useCallback(async () => {
    try {
      const response = await axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
      const data = response.data
      setContent(data)
    } 
    catch(e) {
      console.log(e.message)
    }
  }, []); 

  return [content, getContent];
};
