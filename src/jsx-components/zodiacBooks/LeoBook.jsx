import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function LeoBook() {
    return (

        <ZodiacBook
            URL='leo-book-cover.jpg'
            color="red"
            name="Leo"
            date="(Jul 23-Aug 22)"
        />

    );
}