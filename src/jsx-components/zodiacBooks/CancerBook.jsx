import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function CancerBook() {
    return (

        <ZodiacBook
            URL='cancer-book-cover.jpg'
            color="red"
            name="Cancer"
            date="(Jun 21-Jul 22)"
        />

    );
}