import React from 'react'
import { useSearchParams } from 'react-router-dom';

const WhereToWatch = () => {

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const format = searchParams.get('format')
    return(

        <h1>Where to watch <i>{title}</i></h1>

    );
}

export default WhereToWatch;