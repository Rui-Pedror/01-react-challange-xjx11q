import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

export const App = () => {
  // write your React Code here

  let ContactsList = [
    {
      name: 'John Anders',
      phoneNumber: +1547862344,
      email: 'johnanders@gmail.com',
    },

    {
      name: 'John Anders',
      phoneNumber: +1547862344,
      email: 'johnanders@gmail.com',
    },

    {
      name: 'John Anders',
      phoneNumber: +1547862344,
      email: 'johnanders@gmail.com',
    },

    {
      name: 'John Anders',
      phoneNumber: +1547862344,
      email: 'johnanders@gmail.com',
    },

    {
      name: 'John Anders',
      phoneNumber: +1547862344,
      email: 'johnanders@gmail.com',
    },
  ];
};
/*
return <div ContactsList="contacts-class">Hello World</div>
*/

<div>
  <h1 className="text-center">My contacts list 📱</h1>

  <div>
    // add at least 5 people contact info (name, phone, email and a delete
    button)
  </div>
</div>;

ReactDOM.render(App, document.getElementById('root'));
