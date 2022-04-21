import React from 'react';
import MovieCard from '../components/MovieCard';
import useFetch from '../customHooks/useFetch';

const Search = () => {
    const [search, setSearch] = React.useState('');
    // const [searchData, setSearchData] = React.useState([]);
    const [firstCat, setFirstCat] = React.useState([]);
    const [secondCat, setSecondCat] = React.useState([]);

    const handleChange = (e) => {
        setSearch(e);
    }
    const movieUrl = `https://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`;
    const movieData = useFetch(movieUrl);
    const { response, error, isLoading } = movieData;

    console.log(response, error, isLoading);
    if (error) { console.log(error) };

    if (firstCat.length === 6 && secondCat.length === 6) {
        localStorage.setItem("firstCat", JSON.stringify(firstCat));
        localStorage.setItem("secondCat", JSON.stringify(secondCat));
    }

    console.log(firstCat, secondCat);

    return (
        <div>
            <div className="pt-2 text-gray-600 mt-5 ml-8 md:ml-[30rem]">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-6/12"
                    type="search" name="search" placeholder="Search" onChange={(e) => handleChange(e.target.value)} />
            </div>
            <div className='m-3'>
                <div className='grid md:grid-cols-3 gap-1'>
                    {isLoading || response.Response === 'False' ? <h1>Loading...</h1> : (
                        response.Search.map((movie) => {
                            return (
                                <MovieCard key={movie.imdbID} movie={movie} setFirstCat={setFirstCat} setSecondCat={setSecondCat} firstCat={firstCat} secondCat={secondCat} />
                            )
                        })

                    )
                    }
                </div>
            </div>

        </div>

    );
};

export default Search;