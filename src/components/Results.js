import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ResultCard from './ResultCard';
import './Results.css'



const Results = () => {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const format = searchParams.get('format');
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)


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
        

            const fetchServices = async () => {
                setError(null);
                setIsLoading(true);

                const options = {
                    method: 'GET',
                    headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjA3OTFlZjg2MTFlZTYxYmJlM2U5Y2ExMDk4ODBkMyIsIm5iZiI6MTcyOTA0NjYwMC44MzUsInN1YiI6IjY3MGYyODQ4MDQzMzFkYjRiMTEyNjAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O4ih1i4AWwcPCq79LE-XkTKMISygqRu_jAxkQTJFSrE'
                    }
                };
                
                try{

                    let response;
                    if(format=== 'movie'){
                        response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options);

                    }
                    else{
                        response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${title}&include_adult=false&language=en-US&page=1`, options)
                    }
                    const jsonData = await response.json();

                    const results = jsonData['results'];
                    setData(results);
                    
                }catch(err){
                    console.log('error')
                }finally{
                    setIsLoading(false)
                }
            }

            fetchServices();
           
        }else{
            setData(null);

        }

       
    }, [title])

    if(!data){
        return <p>No data</p>
    }
    return(
        <div className=''>
            <h1> Results for: '{title}'</h1>
            <div className='container-r'>
                {data.map((show, index) => (
                    
                    <a 
                        className='search-result'
                        href={`/whereToWatch?title=${format === 'movie' ? encodeURIComponent(show['original_title']) : encodeURIComponent(show['name'])}&id=${show['id']}`}
                        key={index}
                    >
                        {format === 'movie' ? show['original_title'] : show['name']}
                    </a>
                    
                ))}
            </div>
           

        </div>
    );
};

export default Results;