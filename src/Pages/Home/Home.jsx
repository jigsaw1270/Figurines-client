import React from 'react';
import Banner from './Components/Banner';

import Tablet from './Components/Tablet';
import Bonusone from './Components/Bonusone';
import Bonustwo from './Components/Bonustwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Tablet></Tablet>
           <Bonusone></Bonusone>
           <Bonustwo></Bonustwo>
        </div>
    );
};

export default Home;