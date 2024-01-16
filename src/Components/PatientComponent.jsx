import React, { useState } from 'react';
import { FormComponent } from './FormComponent';

export const PatientComponent = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [reset,setReset] = useState(false);


  

  const clearDataFtn = () => {
    setName('');
    setPlace('');
    setReset(true)
  };

  return (
    <div className='container'>
      <div>
        <label className='labeltext' >Name: <span className='innertext' >{name}</span></label>
      </div>
      <div>  
        <label className='labeltext'>Place: <span className='innertext'>{place}</span></label>
      </div>
      <button onClick={clearDataFtn}>Clear</button>

      <FormComponent setName={setName} setPlace={setPlace} setReset={setReset} reset={reset} />
    </div>
  );
};