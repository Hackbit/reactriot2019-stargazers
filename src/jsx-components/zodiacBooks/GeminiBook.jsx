import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function GeminiBook() {
    return (

        <ZodiacBook
            URL='gemini-book-cover.jpg'
            color="red"
            name="Gemini"
            date="(May 21-June 20)"
        />

    );
}