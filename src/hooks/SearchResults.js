import {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi =  async (searchItem) => {
        try{

            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchItem,   // term = term
                    location: 'san jose'
                }
            })
            
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage("Something went wrong")
        }
    }

    useEffect ( () => {
        searchApi('pasta')
    }, [])

    return [results, errorMessage, searchApi]
}