import React from 'react'
import { Card, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

function CardMovie({ mov }) {
    const language = useSelector((state) => state.language);

    return (
        <Col Col lg="4" className='mt-5' >
            <Fade bottom >
                <Card className='cardbody'>
                    <Card.Img variant="top" className='cardimg' src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path} />
                    <Card.Body>
                        <Card.Title className={language === 'ar' ? "text-end" : ""}>{language === 'ar' ? ':عنوان الفيلم' : "Movie Title:"}</Card.Title>
                        <Card.Text className={language === 'ar' ? "text-end" : ""}>
                            {mov.title}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className={language === 'ar' ? "text-end" : ""}>{language === 'ar' ? `${mov.release_date} :تاريخ الاصدار` : `Release Date: ${mov.release_date}`} </ListGroup.Item>
                        <ListGroup.Item className={language === 'ar' ? "text-end" : ""}>{language === 'ar' ? `${mov.vote_average} : التقييم` : `Evaluation: ${mov.vote_average}`} </ListGroup.Item>
                        <ListGroup.Item className={language === 'ar' ? "text-end" : ""}>{language === 'ar' ? `${mov.vote_count} : عدد الأصوات` : `Vote Count: ${mov.vote_count}`} </ListGroup.Item>
                    </ListGroup>
                    <Card.Body className={language === 'ar' ? "text-end" : ""}>
                        <Card.Link><Link to={`/movie/${mov.id}`}>{language === 'ar' ? 'تفاصيل الفيلم' : "Movie Details"}</Link></Card.Link>
                    </Card.Body>
                </Card>
            </Fade>
        </Col>
    )
}

export default CardMovie