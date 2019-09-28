import React from 'react';
import ZodiacBook from './jsx-components/zodiacBooks/ZodiacBook';

export default function LibraBook () {
    return (

        <ZodiacBook
            URL='libra-book-cover.jpg'
            color="red"
            name="Libra"
            date="(Sep 23-Oct 22)"
        />

    );
}