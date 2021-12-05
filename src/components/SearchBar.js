import React from "react";
import { Text, View,TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onEndChange }) => {
    return(
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Search" 
            style={styles.textInput}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onEndChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        height: 50,
        borderRadius: 10,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal:15,
        backgroundColor: '#D3E4CD',
        flexDirection: 'row'
    },

    textInput: {
        flex: 1,
        fontSize: 20,
        marginLeft: 15
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
    
});

export default SearchBar
