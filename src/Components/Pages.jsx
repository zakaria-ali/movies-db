import React from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../Redux/Actions/movieAction';

function Pages() {
  const language = useSelector((state) => state.language);
  const pageCount = useSelector((state) => state.pageCount);
  const apiTarget = useSelector((state) => state.apiTarget);
  const word = useSelector((state) => state.word);

  const dispatch = useDispatch();

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1, language, apiTarget, word))
  }
  const scroolToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={`${language === 'ar' ? 'التالي' : 'Next'}`}
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={`${language === 'ar' ? 'السابق' : 'Previous'}`}
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
      onClick={scroolToTop}
    />
  )
}

export default Pages