import React, {useEffect, useState} from 'react';
import {Dimensions, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';


const SearchInput = ({value = '', onTextChange = null}) => {

    const [val, setVal] = useState(value);

    useEffect(() => {

        if (onTextChange) {
            onTextChange(val);
        }
    }, [val]);

    return (
        <View style={styles.container}>
            <View style={styles.searchView}>
                <Image style={{width: 16, height: 16}}
                       source={require('../img/aramaPasif.png')}/>


                <TextInput value={val} autoFocus={true} placeholder="Ara" style={{padding: 6, flex: 1}}
                           onChangeText={(text) => setVal(text)}/>


                {val.length === 0 ? null :
                    <TouchableOpacity onPress={() => {
                        setVal('');
                    }}>
                    </TouchableOpacity>
                }
            </View>
            <View style={styles.line}/>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: '#fff',
        marginBottom: 10,

    },
    searchView: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        marginTop: 10,
        backgroundColor: '#fff',

    },
    line: {

        borderBottomWidth: 2,
        height: 10,
        borderColor: '#c1c1c1',
    },

});

export default SearchInput;
