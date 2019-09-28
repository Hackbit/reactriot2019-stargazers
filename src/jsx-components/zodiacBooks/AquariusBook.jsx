import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function AquariusBook() {
    return (

        <ZodiacBook
            URL='aquarius-book-cover.jpg'
            color="red"
            name="Aquarius"
            date="(Jan 20-Feb 18)"
        />
        
    );
}