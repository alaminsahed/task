import React from 'react';

const MovieCard = ({ movie, setFirstCat, setSecondCat, firstCat, secondCat }) => {


    const movieList = (movie) => {
        if (firstCat.length < 6) {
            const duplicate = firstCat.find(item => item.imdbID === movie.imdbID);
            if (!duplicate) {
                setFirstCat(prev => [...prev, movie]);
            }
            else {
                window.alert("You have already selected this movie");
            }
        } else if (secondCat.length < 6) {
            const duplicate = secondCat.find(item => item.imdbID === movie.imdbID);
            if (!duplicate) {
                setSecondCat(prev => [...prev, movie])
            }
            else {
                window.alert("You have already selected this movie");
            }
        }
        else {
            window.alert('You have reached the limit of 6 movies for both two categories')
        }

    }



    return (
        <div className='mt-3 cursor-pointer' onClick={() => movieList(movie)}>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md md:h-20">

                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">{movie.Title}</h5>

                </div>
            </div>
        </div>
    );
};

export default MovieCard;