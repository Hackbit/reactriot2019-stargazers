import React from 'react';
import AriesBook from './jsx-components/zodiacBooks/AriesBook';
import TaurusBook from './jsx-components/zodiacBooks/TaurusBook';
import GeminiBook from './jsx-components/zodiacBooks/GeminiBook';
import CancerBook from './jsx-components/zodiacBooks/CancerBook';
import LeoBook from './jsx-components/zodiacBooks/LeoBook';
import VirgoBook from './jsx-components/zodiacBooks/VirgoBook';
import LibraBook from './jsx-components/zodiacBooks/LibraBook';
import ScorpioBook from './jsx-components/zodiacBooks/ScorpioBook';
import SagittariusBook from './jsx-components/zodiacBooks/SagittariusBook';
import CapricornBook from './jsx-components/zodiacBooks/CapricornBook';
import AquariusBook from './jsx-components/zodiacBooks/AquariusBook';
import PiscesBook from './jsx-components/zodiacBooks/PiscesBook';

export default function AllZodiacBooks() {
    return (
        <div className="AllZodiacBooks">

            <AriesBook />
            <TaurusBook />
            <GeminiBook />
            <CancerBook />
            <LeoBook />
            <VirgoBook />
            <LibraBook />
            <ScorpioBook />
            <SagittariusBook />
            <CapricornBook />
            <AquariusBook />
            <PiscesBook />

        </div>
    );
}