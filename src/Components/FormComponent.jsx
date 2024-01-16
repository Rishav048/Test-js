import React, { useEffect, useState } from 'react';
 
 export const FormComponent = ({ setName, setPlace,setReset,reset}) => {
  const [inputName, setInputName] = useState('');
  const [inputPlace, setInputPlace] = useState('');

useEffect(()=>{
if(reset){
    setInputName('');
    setInputPlace('');
}
},[reset])



  const displayDataFtn = () => {
    setName(inputName);
    setPlace(inputPlace);
  };

  return (
    <>
    <div className='container-form'>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => {setInputName(e.target.value); setReset(false)}}
        />
      </div>
      <div>
        <label>Place: </label>
        <input
          type="text"
          value={inputPlace}
          onChange={(e) => {setInputPlace(e.target.value); setReset(false)}}
        />
      </div>
      
    </div>
    <button onClick={displayDataFtn}>Display</button>
    </>
  );
};