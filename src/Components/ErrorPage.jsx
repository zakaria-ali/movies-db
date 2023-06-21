import React from 'react'
import errorImage from '../images/errorimg.png';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

function ErrorPage() {
  const language = useSelector((state) => state.language);

  return (
    <div className="error-page">
      <h1>{language === 'ar' ? '.لم يتم العثور على أفلام' : "No Movies Found."}</h1>
      <p>{language === 'ar' ? '.عذرا ، لا توجد أفلام لعرضها في الوقت الحالي.' : "Sorry, there are no movies to display at the moment."}</p>
      <Button className='errorbtn' variant="outline-danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        {language === 'ar' ? '  ...تحميل' : "Loading..."}
      </Button>
      <img src={errorImage} alt="Error" className="error-image" />
    </div>
  )
}

export default ErrorPage