import React, { useEffect, useState } from "react";
import Axios from "axios";
import endPoints,{createImageUrl} from "../Services/MovieServices";

const Hero = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    Axios.get(endPoints.popular).then((res) => {
      const movies = res.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    });
  }, []);
  if (!movie) {
    return (
      <>
        <p>fetching movie...</p>
      </>
    );
  }
  const { title, backdrop_path, release_date, overview } = movie;
  const truncate = (str, length) => {
    if (!str) return "";
    return str.length > length ? str.slice(0, length) + "..." : str;
  };
  return (
    <div className="w-full h-[550px] lg:h-[750px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[750px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path,"original")}
          alt={title}
        />
        <div className="absolute w-full top-[20%] md:top-[22%] lg:top-[38%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border bg-gray-300 py-2 px-5 text-black">
              play
            </button>
            <button className="capitalize border border-gray-300 py-2 px-5 ml-2">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[55%] xl:max-w-[40%] text-gray-200">{truncate(overview,190)}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
