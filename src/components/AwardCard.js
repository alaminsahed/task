import React from 'react';

const AwardCard = ({ movie, handleNomination }) => {
    const [highlight, setHightlight] = React.useState(false);



    return (
        <div className='mt-3 cursor-pointer m-2' onClick={() => handleNomination(movie)}>
            <div className={highlight ? "max-w-sm  border border-black text-center shadow-md md:h-64 bg-red-300" : "max-w-sm  border border-black text-center shadow-md md:h-64 bg-sky-300"}>
                <div className="p-5">

                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">{movie.Title}</h5>

                </div>
                <img className="rounded-full h-20 w-20 m-auto " src={movie.Poster} alt="" />

                <button className='bg-slate-600 p-2 my-2 text-white cursor-pointer' onClick={() => setHightlight(!highlight)}>Select Button</button>

            </div>
        </div>
    );
};

export default AwardCard;