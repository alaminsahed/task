import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../customHooks/useFetch';

const FlotCard = () => {
    const catUrl = "https://catfact.ninja/fact";
    const catData = useFetch(catUrl);
    const { response, error, isLoading } = catData;
    console.log(response);
    if (error) { console.log(error) }
    const [fact, setFact] = useState('');


    useEffect(() => {
        setFact(response?.fact)
        const interval = setInterval(() => {
            const fectFact = axios.get(catUrl);
            fectFact.then(res => {
                console.log(res.data.fact);
                setFact(res.data.fact);
            })
        }, 6000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">

                    <p className="text-gray-700 text-base">
                        {fact}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FlotCard;