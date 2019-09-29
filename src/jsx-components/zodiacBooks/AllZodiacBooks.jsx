import React from 'react';
import './../../css-components/AllZodiacBooks.css';
import AriesBook from './AriesBook';
import TaurusBook from './TaurusBook';
import GeminiBook from './GeminiBook';
import CancerBook from './CancerBook';
import LeoBook from './LeoBook';
import VirgoBook from './VirgoBook';
import LibraBook from './LibraBook';
import ScorpioBook from './ScorpioBook';
import SagittariusBook from './SagittariusBook';
import CapricornBook from './CapricornBook';
import AquariusBook from './AquariusBook';
import PiscesBook from './PiscesBook';
import Header from './../Header';

export default function AllZodiacBooks() {
    return (
        <div className="AllZodiacBooks">

            <div className="header">

                <Header />
                
            </div>

            <div className="books">

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

        </div>
    );
}