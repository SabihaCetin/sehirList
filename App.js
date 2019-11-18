import React from 'react';

import MainStack from './src/MainStack';


import {createAppContainer} from 'react-navigation';


const AppContainer = createAppContainer(MainStack);


const App = () => {
    return (

        <AppContainer/>

    );
};


export default App;
