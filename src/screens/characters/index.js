import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Characters = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCharacters = async () => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('Show', { item })}>
            <View style={styles.cellLeft}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.img}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.cellRight}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.species}>{item.species}</Text>
            </View>
        </TouchableOpacity>
    );

    const emptyList = () => {

        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>500 error... </Text>
                <Image style={styles.emptyImg} source={require('../../img/error.jpg')} />
            </View>
        );
    }

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={renderItem}
                    ListEmptyComponent={emptyList}
                />
            )}
        </View>
    );
};

export default Characters;