import React from './node_modules/react';
import Header from './Header';
import Data from './Data';
import '../css-components/MainPage.css';

function MainPage() {
    return (
        <div  className="MainPage">
            <Header />
            <Data/>
        </div>
    )}
export default MainPage;