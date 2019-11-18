import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, Image, StyleSheet} from 'react-native';


const List = ({navigation, data, nav = null}) => {

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
                        }>
                            <View style={{flexDirection: 'row'}}>
                                <Image source={require('../../src/img/city-hall.png')}
                                       style={styles.iconImage}/>
                                <Text style={{margin: 10, flex: 1}}>{item.tanim}</Text>
                                <Image source={require('../../src/img/arrowRight.png')}
                                       style={styles.iconImage}/>
                            </View>

                            <View style={styles.line}/>

                        </TouchableOpacity>
                    );
                }}/>

        </View>
    );

};


export default List;

const styles =StyleSheet.create({
    iconImage:{
        height: 20,
        width: 20,
        margin: 10
    },
    line:{
        borderBottomWidth: 1,
        marginTop:5,
        marginBottom:5,
        borderColor: '#919191'
    }
})
