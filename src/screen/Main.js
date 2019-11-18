import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import List from '../component/List';
import SearchInput from '../component/SearchInput';

const Main = ({navigation}) => {


    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [resultList, setResultList] = useState([]);


    useEffect(() => {
        getIlceList();
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


    const getIlceList = () => {
        return new Promise((resolve, reject) => {
            fetch('https://digikent.basaksehir.bel.tr:8091/VadiRestMobile/login/belediyeler/34', {
                method: 'get',
                mode: 'no-cors',
                headers: {'Content-Type': 'application/json'},
            })
                .then(response => {
                    //console.log(response);
                    if (!response.ok) {
                        throw new Error(response.status);
                    }
                    return response.json();
                })
                .then(data => {
                    resolve(data);
                    setData(data);
                }).catch(err => reject(err));
        });
    };

    return (
        <View>
            <SearchInput value={search}
                         onTextChange={value => {
                             setSearch(value.toLocaleLowerCase('tr'));
                         }}/>
            {search === '' ?
                <List data={data} navigation={navigation} nav={'MahalleList'}/>
                :
                <List data={resultList} navigation={navigation} nav={'MahalleList'}/>
            }
        </View>
    );
};


export default Main;
