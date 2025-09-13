import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LtqApp from './LtqApp';
import LtqEventComp from './components/LtqEventComp';
import LtqEventCompoClass from './components/LtqEventCompoClass';
import LtqEventForm1 from './LtqEventForm1';
import LtqEventForm2 from './components/LtqEventForm2';

const root = ReactDOM.createRoot(document.getElementById('ltq-root'));
root.render(
  <React.StrictMode>
    <LtqApp />
    <LtqEventComp/>
    <LtqEventCompoClass/>
    <LtqEventForm1/>
    <LtqEventForm2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
