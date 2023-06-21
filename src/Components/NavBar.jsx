import React, { useRef } from 'react'
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import Flash from 'react-reveal/Flash';
import { useDispatch } from 'react-redux';
import { changeLanguage, getMoviesByGenres, getPopularMovies, getTopRatedMovies, searchForMovie } from '../Redux/Actions/movieAction';
import { useSelector } from 'react-redux';

function NavBar() {
    const formControlRef = useRef(null)
    const dispatch = useDispatch()
    const language = useSelector((state) => state.language);
    const genres = useSelector((state) => state.genres)
    const movieSet = useSelector((state) => state.movies)

    const changeLan = (lan) => {
        dispatch(changeLanguage(lan))
    }
    const onSearch = () => {
        const value = formControlRef.current.value;
        dispatch(searchForMovie(value, language))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch()
    }

    const handelMoviesByGenres = (genid) => {
        dispatch(getMoviesByGenres(movieSet, genid))
    }

    return (
        <Navbar className='navbar' expand="lg">
            <Container>
                <Navbar.Brand href="#"><img className='logoimg' src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='fs-5' href="/movies-db">
                            {language === 'ar' ? 'الصفحة الرئيسية ' : "Home"}
                        </Nav.Link>
                        <NavDropdown className='fs-5' title={`${language === 'ar' ? 'اللغة' : 'Language'}`} id="navbarScrollingDropdown">
                            <Flash >
                                <NavDropdown.Item className={language === 'ar' ? "text-end" : ""} onClick={() => changeLan("ar")}>{language === 'ar' ? ' العربية' : "Arabic"}</NavDropdown.Item>
                                <NavDropdown.Item className={language === 'ar' ? "text-end" : ""} onClick={() => changeLan("en")}>{language === 'ar' ? '  الانجليزية' : "English"}</NavDropdown.Item>
                            </Flash>
                        </NavDropdown>
                        <NavDropdown className='fs-5' title={`${language === 'ar' ? 'تصفية حسب التصنيف' : 'Filter By Rating'}`} id="navbarScrollingDropdown">
                            <Flash >
                                <NavDropdown.Item className={language === 'ar' ? "text-end" : ""} onClick={() => dispatch(getPopularMovies(language))}>{language === 'ar' ? 'الأفلام الشعبية' : "Popular Movies"}</NavDropdown.Item>
                                <NavDropdown.Item className={language === 'ar' ? "text-end" : ""} onClick={() => dispatch(getTopRatedMovies(language))}>{language === 'ar' ? 'الأفلام الأعلى تقييمًا' : "Top Rated Movies"}</NavDropdown.Item>
                            </Flash>
                        </NavDropdown>
                        <NavDropdown className='fs-5' title={`${language === 'ar' ? 'تصفية حسب النوع' : 'Filter By Genre'}`} id="navbarScrollingDropdown">
                            {
                                genres.map((gen) => {
                                    return (<Flash ><NavDropdown.Item key={gen.id} onClick={() => handelMoviesByGenres(gen.id)}>{gen.name}</NavDropdown.Item></Flash>)
                                })
                            }
                        </NavDropdown>
                    </Nav>
                    <Col lg={`${language === 'ar' ? '4' : '6'}`}>
                        <Form className="d-flex" onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                placeholder={`${language === 'ar' ? ' ...البحث عن فيلم' : 'Search for a movie...'}`}
                                className={`me-2 ${language === 'ar' ? 'text-end' : ''}`}
                                aria-label="Search"
                                ref={formControlRef}
                            />
                            <Button onClick={onSearch} variant="outline-dark">{`${language === 'ar' ? 'بحث ' : 'Search'}`}</Button>
                        </Form>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
