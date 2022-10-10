import React, { useState } from "react";
import useMultiform from './useMultiform';
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import AccountForm from './AccountForm';

export type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  state: string;
  zip: number;
  email: string;
  password: string;
}

const initial_data: FormData = {
  firstName: '',
  lastName: '',
  age: 1,
  street: '',
  city: '',
  state: '',
  zip: 0,
  email: '',
  password: ''
}

const App = () => {
  const [data, setData] = useState(initial_data);
  
  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ... fields }));
  };
  
  
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiform([
    <UserForm {...data} updateField={updateFields}/>,
    <AddressForm {...data} updateField={updateFields}/>,
    <AccountForm {...data} updateField={updateFields}/>
  ]);
  

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!isLastStep) return next();
    alert('Successful Account Creation!')
  }

  console.log(data);
  return (
    <div
      style={{
        position: 'relative',
        background: '#fff',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem',
        fontFamily: 'Arial'
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',

          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            margin: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end'          
          }}
        >
          {
            !isFirstStep && <button onClick={back} type='button'>Back</button>
          }
          <button type='submit'>
            {
              isLastStep ? 'Finish' : 'Next'
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default App;