import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './screen/Main';
import MahalleList from './screen/MahalleList';
import List from './component/List';
import {Image, StyleSheet, Text, View} from 'react-native';


const MainStack =
    createStackNavigator({
            Main: {
                screen: Main,

            }, MahalleList: {
                screen: MahalleList,
                navigationOptions: {
                    headerTitle:
                        (<Text style={{fontWeight: 'bold', fontSize: 20, color: '#547ca6'}}>
                            MAHALLE LİSTESİ
                        </Text>),
                },
            },


        },
        {
            initialRouteName: 'Main',
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
            defaultNavigationOptions: {

                headerTitle:
                    (<Text style={{fontWeight: 'bold', fontSize: 20, color: '#547ca6'}}>
                        İLÇE LİSTESİ
                    </Text>),
                headerBackTitle: null,
                headerBackImage: (
                    <Image source={require('../src/img/left-arrow.png')}
                           style={{height: 20, width: 20, margin: 10}}/>
                ),


            },

        },
    );


export default MainStack;
