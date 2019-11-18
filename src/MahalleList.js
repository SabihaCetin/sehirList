import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, FlatList, Image} from 'react-native';
import List from './component/List';
import SearchInput from './component/SearchInput';


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
            if(search===''){
                setResultList('');
            }



        } catch (e) {
            console.log(e);
        }
    };


    const getMahalleList = () => {


        return new Promise(async (resolve, reject) => {
            let body = JSON.stringify({belediyeId: ilceId, userId: 1});
            console.log('body');
            console.log(body);
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
                data={search==='' ? data:resultList}
                keyExtractor={(item, index) => index + item.id + item.tanim}
                renderItem={({item}) => {
                    return (
                        <View>

                            <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                                <Image source={require('../src/img/two-houses.png')}
                                       style={{height: 30, width: 30, margin: 10}}/>
                                <Text style={{margin: 10, flex: 1}}>{item.tanim}</Text>

                            </View>
                            <View style={{borderBottomWidth: 1, margin: 5, borderColor: '#919191'}}/>

                        </View>
                    );
                }}/>
        </View>
    );

};


export default MahalleList;
