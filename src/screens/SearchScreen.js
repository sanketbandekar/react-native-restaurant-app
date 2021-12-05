import React, {useState} from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import SearchBar from "../components/SearchBar";
import SearchResults from "../hooks/SearchResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results,errorMessage,searchApi] = SearchResults()

    const searchResultsByPrice = (price) => {
        return results.filter( result => {
            return result.price === price
        })
    }

    return(
        <View style={styles.bg}>
            <SearchBar 
            term = {term} 
            onTermChange = { (newTerm) => setTerm(newTerm) }
            onEndChange={ () => searchApi(term) }/>

            { errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null }
            <ScrollView>
                <ResultsList results = {searchResultsByPrice('$')} title = "Cost Effective"/>
                <ResultsList results = {searchResultsByPrice('$$')} title = "Bit Pricer"/>
                <ResultsList results = {searchResultsByPrice('$$$')} title = "Big Spender"/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FEF5ED',
        flex: 1
        //...StyleSheet.absoluteFillObject
    }
});

export default SearchScreen
