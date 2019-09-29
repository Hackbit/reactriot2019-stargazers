import React from 'react';
import './App.css';
// import AllZodiacBooks from './jsx-components/zodiacBooks/AllZodiacBooks';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';


export default function App() {
  return (
    <div className="App">

      <h1>HELLO WORLD</h1>

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='aries-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='taurus-book-cover.png'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='virgo-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='leo-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='leo-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='leo-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='leo-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />

      <ZodiacBook
        anchorURL="https://astrostyle.com/wp-content/uploads/2013/12/aries.pdf"
        URL='leo-book-cover.jpg'
        color="#e29992"
        name="Aries"
        date="(Mar 21-Apr 19)"
      />
      {/* <AllZodiacBooks /> */}

    </div>
  );
}