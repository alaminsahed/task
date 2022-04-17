import React from 'react';
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const { id } = useParams();

    const detailsUrl = ``;

    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default PostDetails;