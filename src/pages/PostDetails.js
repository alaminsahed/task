import React from 'react';
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from '../customHooks/useFetch';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const PostDetails = () => {
    const [searchParams] = useSearchParams();
    const titleParams = searchParams.get("title");
    const { data } = useParams();

    const searchDetails = `https://www.reddit.com/r/${data}/search.json?q="${titleParams}"`;

    const details = useFetch(searchDetails);
    const { response, error, isLoading } = details;
    if (error) {
        console.log(error);
    }
    const { title, selftext, author } = response.data.children[0].data;


    return (
        <div>
            <div className="w-60 md:w-2/4 mx-auto rounded overflow-hidden shadow-lg mt-20 transform transition duration-200 hover:scale-105">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p><small>posted by {author}</small></p>
                    <p className="text-gray-700 text-base">
                        <ReactMarkdown children={selftext} remarkPlugins={[remarkGfm]} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;