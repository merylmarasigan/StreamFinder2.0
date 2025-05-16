import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultCard from './ResultCard';
import './Results.css'



const Results = (prop) => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);


    function createCard(card) {
        const country = card.country;
        const services = card.services;
        return <ResultCard country={card.country} services={card.services}/>;
    
    }
    // const results = [
    //     {"country": "United States", "services": ['Hulu', 'Disney+', 'Netflix']},
    //     {"country": "Mexico", "services": ['Disney+', 'Netflix']},
    //     {"country": "Canada", "services": ['Peacock', 'Netflix']},
    //     {"country": "United Kingdom", "services": ['Peacock', 'BBC']},
    //     {"country": "Japan", "services": ['Amazon Video', 'Apple TV', 'Google Play Movies', 'Hulu', 'Disney Plus', 'U-NEXT', 'Amazon Prime Video']},
        
    // ]

    // const title = prop.title

    useEffect(() => {
        if(title){
            console.log(`title: ${title}`);
        }

        const fetchServices = async () => {
            setError(null);

            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjA3OTFlZjg2MTFlZTYxYmJlM2U5Y2ExMDk4ODBkMyIsIm5iZiI6MTcyOTA0NjYwMC44MzUsInN1YiI6IjY3MGYyODQ4MDQzMzFkYjRiMTEyNjAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4ih1i4AWwcPCq79LE-XkTKMISygqRu_jAxkQTJFSrE'
                }
              };
              
              fetch('https://api.themoviedb.org/3/movie/550/watch/providers', options)
                .then(res => res.json())
                // .then(res => console.log(res['results']))
                
            
                
                .catch(err => console.error(err));

           
        }

        //fetchServices();
    }, [title])
    return(
        <div className=''>
            <h1>Where to Watch {title}</h1>
            <div className='container-r'>

                {/* {results.map(createCard)} */}

            </div>
           

        </div>
    );
};

export default Results;