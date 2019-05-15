import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header'

//create a component 

const App = () => {
    return(
        <Header headerText='Albums!'></Header>
    );
};

AppRegistry.registerComponent('albums', () => App)