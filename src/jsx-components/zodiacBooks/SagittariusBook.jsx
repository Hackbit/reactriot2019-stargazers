import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function SagittariusBook() {
    return (

        <ZodiacBook
            URL='sagittarius-book-cover.jpg'
            color="red"
            name="Sagittarius"
            date="(Nov 22-Dec 21)"
        />

    );
}