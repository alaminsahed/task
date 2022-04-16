import React from 'react';
import Card from '../components/Card';
import useFetch from '../customHooks/useFetch';


const ReactPost = () => {
    const reactUrl = 'https://www.reddit.com/r/reactjs.json';
    const reactPost = useFetch(reactUrl);
    const { response, error, isLoading } = reactPost;
    if (error) {
        console.log(error);
    }

    return (
        <div>
            {
                isLoading ? <h1>Loading...</h1> : <Card posts={response} />
            }
        </div>
    );
};

export default ReactPost;