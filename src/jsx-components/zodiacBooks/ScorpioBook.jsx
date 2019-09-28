import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function ScorpioBook() {
    return (

        <ZodiacBook
            URL='scorpio-book-cover.jpg'
            color="red"
            name="Scorpio"
            date="(Oct 23-Nov 21)"
        />

    );
}