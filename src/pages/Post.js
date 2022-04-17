import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';
import useFetch from '../customHooks/useFetch';
import { useParams } from "react-router-dom";


const Post = () => {
    const params = useParams();
    // console.log("params", params);
    const reactUrl = `https://www.reddit.com/r/${params.data}.json`;
    const reactPost = useFetch(reactUrl);
    const { response, error, isLoading } = reactPost;
    if (error) {
        console.log(error);
    }

    return (
        <div>
            <Nav />
            {
                isLoading ? <h1>Loading...</h1> : <Card posts={response} />
            }
        </div>
    );
};

export default Post;