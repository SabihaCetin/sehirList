import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, Image} from 'react-native';


const List = ({navigation, data, nav = null}) => {

    useEffect(() => {

    }, []);


    return (
        <View>


            <FlatList
                data={data}
                keyExtractor={(item, index) => index + item.id + item.tanim}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            if (nav === null) {
                                return null;
                            } else {
                                navigation.navigate(nav, {
                                    ilceId: item.id,
                                });
                            }

                        }
                        }
                        >

                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../../src/img/city-hall.png')}
                                       style={{height: 20, width: 20, margin: 10}}/>
                                <Text style={{margin: 10, flex: 1}}>{item.tanim}</Text>
                                <Image source={require('../../src/img/arrowRight.png')}
                                       style={{height: 20, width: 20, margin: 10}}/>
                            </View>
                            <View style={{borderBottomWidth: 1, margin: 5, borderColor: '#919191'}}/>

                        </TouchableOpacity>
                    );
                }}/>

        </View>
    );

};


export default List;
