import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={ { uri: result.image_url } }/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Ratings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 300,
        height: 180,
        borderRadius: 10,
        marginBottom: 5
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default ResultsDetail
