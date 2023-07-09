import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BetterDatePicker from './betterDatePicker';
import data from './openHours.json'

let userDateSelect = ({day, hour}) => { 
  // console.log({day, hour})
  return {day, hour}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BetterDatePicker data={data.open} userDateSelect={userDateSelect} styling='' title='Data Wizyty'/>
);

