import React from 'react';
import { useNavigate } from "react-router-dom";
// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { useParams } from "react-router-dom";

const Card = ({ posts }) => {
    const { children } = posts.data;
    console.log("children", children);
    const params = useParams();
    let navigate = useNavigate();

    const details = (title) => {
        console.log("+++", title);
        console.log("@@@", `/details/${params.data}/${title}`);
        navigate(`/details/${params.data}?title=${title}`);
    }

    return (
        <div>
            {
                children.map(post => {
                    //const input = post.data.selftext;
                    return (
                        <div key={post.data.id} onClick={() => details(post.data.title)}>
                            <div className="w-60 md:w-full mx-auto rounded overflow-hidden shadow-lg md:p-5 pt-2 md:mx-5 cursor-pointer transform transition duration-200 hover:scale-105">
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{post.data.title}</div>
                                    <p><small>posted by {post.data.author}</small></p>
                                    {/* <p className="text-gray-700 text-base">
                                        <ReactMarkdown children={input} remarkPlugins={[remarkGfm]} />
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    );
                }
                )
            }
        </div>
    );
};

export default Card;