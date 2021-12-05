import React, { useState, useEffect} from "react";
import { Text, View, StyleSheet, Image, FlatList } from 'react-native'
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation}) => {

    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
    const getResults = async id => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResults(id)
    }, [])

    if(!result){
        return null
    }


    return(
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={ photo => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 250
    }
});

export default ResultShowScreen
