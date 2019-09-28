import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';


export default function App() {
  return (
    <div className="App">

      <h1>HELLO WORLD</h1>

      <ZodiacBook
        name="Aries"
        URL='aquarius-book-cover.jpg'
        color="red"
      />
    </div>
  );
}