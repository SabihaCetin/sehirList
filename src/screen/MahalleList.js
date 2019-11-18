import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, Image, StyleSheet} from 'react-native';
import SearchInput from '../component/SearchInput';


const MahalleList = ({navigation}) => {

    const ilceId = navigation.getParam('ilceId');

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [resultList, setResultList] = useState([]);

    useEffect(() => {

        getMahalleList();
        onSearch(search).then();

    }, [search]);


    const onSearch = async (query) => {
        try {

            let result = [];


            for (const item of data) {
                if (item) {
                    if (item.tanim.toLocaleLowerCase('tr').includes(query)) {
                        result.push(item);

                    }
                }

            }

            setResultList(result);
            if (search === '') {
                setResultList('');
            }


        } catch (e) {
            console.log(e);
        }
    };


    const getMahalleList = () => {

        return new Promise(async (resolve, reject) => {
            let body = JSON.stringify({belediyeId: ilceId, userId: 1});
            return fetch('https://digikent.basaksehir.bel.tr:8091/VadiRestMobile/login/mahalle', {
                method: 'post',
                mode: 'no-cors',
                body: body,
                headers: {'Content-Type': 'application/json'},
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    setData(responseJson);
                    return responseJson.movies;
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    };

    return (
        <View>
            <SearchInput value={search}
                         onTextChange={value => {
                             setSearch(value.toLocaleLowerCase('tr'));
                         }}
            />
            <FlatList
                data={search === '' ? data : resultList}
                keyExtractor={(item, index) => index + item.id + item.tanim}
                ListEmptyComponent={<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}><Text>Mahalle
                    bilgisine ulaşılamamaktadır.</Text></View>}
                renderItem={({item}) => {
                    return (
                        <View>

                            <View style={styles.itemView}>
                                <Image source={require('../../src/img/two-houses.png')}
                                       style={styles.icon}/>
                                <Text style={{margin: 10, flex: 1}}>{item.tanim}</Text>

                            </View>
                            <View style={styles.line}/>

                        </View>
                    );
                }}/>
        </View>
    );

};


export default MahalleList;


const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20,
        margin: 10,
    },
    line: {
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5,
        borderColor: '#919191',
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

