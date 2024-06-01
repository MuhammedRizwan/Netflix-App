import React from 'react'
import Hero from '../Components/Hero'
import MovieRow from '../Components/MovieRow'
import endPoints from '../Services/MovieServices'

const Home = () => {
  return <>
  <Hero/>
  <MovieRow title='upcoming' url={endPoints.upcoming} />
  <MovieRow title='trending' url={endPoints.trending} />
  <MovieRow title='top rated' url={endPoints.topRated} />
  <MovieRow title='comedy' url={endPoints.comedy} />
  <MovieRow title='popular' url={endPoints.popular} />
  </>
}

export default Home