import React, {useState} from "react";
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import SearchResults from "../hooks/SearchResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [results,errorMessage,searchApi] = SearchResults()

    return(
        <View style={styles.bg}>
            <SearchBar 
            term = {term} 
            onTermChange = { (newTerm) => setTerm(newTerm) }
            onEndChange={ () => searchApi(term) }/>
            { errorMessage ? <Text style={{color: 'red'}}>{errorMessage}</Text> : null }

            <Text>We have found {results.length} results</Text>

            <ResultsList title = "Cost Effective"/>
            <ResultsList title = "Bit Pricer"/>
            <ResultsList title = "Big Spender"/>
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
