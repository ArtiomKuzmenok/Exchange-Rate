import React from 'react';

const MyButton = ({ cb, param, className, text }) => {
  return ( 
    <div className={className}>
      <button onClick={() => cb(param)}>{text}</button>
    </div>
   );
}
 
export default MyButton;