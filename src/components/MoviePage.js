import React, { useState } from 'react';
import './Home.css'
import './SearchPage.css'
import Results from './Results';
import { useNavigate } from 'react-router-dom';


const TVPage = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/results?title=${encodeURIComponent(title)}&format=movie`)
    }
    return(
        <div className='container'>
            <div>
                <h1>Find a Movie</h1>

                <div className='inputs'>

                    
                    <input 
                    type='text'
                    placeholder='Enter movie title'
                    onChange = {(event) => {
                        setTitle(event.target.value)
                    }}
                    value = {title}
                    >
                    
                    </input>
                    <button type='submit' onClick={handleSubmit}>Search</button>
                

                    
                </div>

            </div>
            


            
        </div>
    );
}

export default TVPage;