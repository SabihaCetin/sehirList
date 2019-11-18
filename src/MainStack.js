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
                        (
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: '#547ca6'}}>
                            MAHALLE LİSTESİ
                        </Text>
                            </View>),
                },
            },


        },
        {
            initialRouteName: 'Main',
            mode: Platform.OS === 'ios' ? 'modal' : 'card',
            defaultNavigationOptions: {

                headerTitle:
                    (
                        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#547ca6'}}>
                                İLÇE LİSTESİ
                            </Text>
                        </View>

                    ),
                headerBackTitle: null,
                headerBackImage: (
                    <Image source={require('../src/img/left-arrow.png')}
                           style={{height: 20, width: 20,}}/>
                ),


            },

        },
    );


export default MainStack;
