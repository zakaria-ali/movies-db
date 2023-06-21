import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../Redux/Actions/movieAction'
import CardMovie from './CardMovie'
import ErrorPage from './ErrorPage'
import NavBar from './NavBar'
import Pages from './Pages'

function MovieList() {
  const [movieSet, setMovieSet] = useState([])
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllMovies(language))
  }, [language])

  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    setMovieSet(dataMovies)
  }, [dataMovies])

  return (
    <div>
    <NavBar />
    <Container >
      <Row>
        {
          movieSet.length >= 1 ? (movieSet.map((mov) => {
            return (<CardMovie key={mov.id} mov={mov} ></CardMovie>)
          }))
            : (<ErrorPage></ErrorPage>)
        }
      </Row>
      <Row>
        {movieSet.length >= 1 ? (<Pages />) : null}
      </Row>
    </Container >
    </div>
  )
}

export default MovieList