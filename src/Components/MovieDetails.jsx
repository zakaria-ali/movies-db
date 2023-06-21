import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const param = useParams();
    const [movie, setMovie] = useState([])
    const language = useSelector((state) => state.language);

    //get  movie by details 
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=dd61077b2f5bb0b4c238ff2ee9c392b3${language === "ar" ? "&language=ar" : ""}`)
        setMovie(res.data)
    }
    console.log(movie)

    useEffect(() => {
        getMovieDetails();
    }, [])

    return (
        <Container>
            <Fade bottom >
                <Row className="justify-content-center">
                    <Col md="12" xs="12" sm="12" className="mt-4 ">
                        <div className="card-detalis  d-flex align-items-center ">
                            <img
                                className="img-movie w-30"
                                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                                alt="ascad"
                            />
                            <div className="justify-content-center text-center  mx-auto">
                                <p className="card-text-details border-bottom">
                                    {language === 'ar' ? 'عنوان الفيلم:' : "Movie Title:"} {movie.title}
                                </p>
                                <p className="card-text-details border-bottom">
                                    {language === 'ar' ? `${movie.release_date} :تاريخ الاصدار` : `Release Date: ${movie.release_date}`}
                                </p>
                                <p className="card-text-details border-bottom">
                                    {language === 'ar' ? `${movie.popularity} :الشعبية` : `popularity: ${movie.popularity}`}
                                </p>
                                <p className="card-text-details border-bottom">
                                    {language === 'ar' ? `${movie.vote_average} :التقييم` : `Evaluation: ${movie.vote_average}`}
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fade>
            <Fade bottom >
                <Row className="justify-content-center">
                    <Col md="12" xs="12" sm="12" className="mt-1 ">
                        <div className={`card-story  d-flex flex-column ${language === 'ar' ? 'text-end' : 'align-items-start'}`}>
                            <div className="p-4 ">
                                <p className="card-text-title border-bottom">{language === 'ar' ? ':قصة الفيلم' : "The Story:"}</p>
                            </div>
                            <div className="text-center px-2">
                                <p className="card-text-story">{movie.overview}</p>
                                <Link to="/movies-db">
                                    <Button variant="outline-dark">{language === 'ar' ? 'العودة الى الصفحة الرئيسية ' : "Back To Homepage"}</Button>
                                </Link>
                                <a href={movie.homepage} >
                                    <Button className='mx-4' variant="outline-dark">{language === 'ar' ? 'مشاهدة الفيلم ' : "Watch Now"}</Button>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Fade>
        </Container>
    )
}

export default MovieDetails