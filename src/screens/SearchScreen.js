import React, {useState} from "react";
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {

    const [term, setTerm] = useState('')

    return(
        <View style={styles.bg}>
            <SearchBar 
            term = {term} 
            onTermChange = { (newTerm) => setTerm(newTerm) }
            onEndChange={ () => { console.log('OK') } }/>
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FEF5ED',
        ...StyleSheet.absoluteFillObject
    }
});

export default SearchScreen
