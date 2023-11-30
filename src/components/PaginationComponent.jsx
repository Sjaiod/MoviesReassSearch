import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import generateArray from './generateArray'; // Replace with the correct path

const itemsPerPage = 10; // You can change this value based on your requirement

const PaginationComponent = ({getData,data, totalResult, currentPage, s, type,  plot }) => {
  const [selectedPage, setSelectedPage] = useState(currentPage||0);
  const [newpage, setNewPage] = useState(null);
  const x = generateArray(totalResult);
  const navigate = useNavigate();

  const handlePageClick = ({ selected }) => {
    setSelectedPage(selected);
    setNewPage(selected);
    handleSearch(selected);
  };

  const handleSearch = async (selectedPage) => {
    setNewPage(selectedPage);
    if (s === "") {
      console.log("asd");
    } else {
      // Your navigation or axios call here
     navigate(`/search/?&s=${s}&type=${type}&plot=${plot}&page=${selectedPage}`)
     data()
     getData()

      // const getData = await axios.get(`${Api}&s=${search}&type=${type}&plot=${plot}&y=${year}`)
      // if (getData) {
      //   const data = await getData.data
      //   console.log(data);
      // }
    }
  };

  console.log(newpage);
  useEffect(() => {
    setSelectedPage(currentPage || 0);
    setNewPage(null); // Reset newpage when currentPage changes
  }, [currentPage]);

  const offset = selectedPage * itemsPerPage;
  const currentItems = x.slice(offset, offset + itemsPerPage);

  return (
    <div style={{ marginTop: '30px' }}>
      {/* Display your paginated content here */}

      {/* Pagination component */}
      <ReactPaginate
  previousLabel={'previous'}
  nextLabel={'next'}
  breakLabel={'...'}
  pageCount={Math.ceil(x.length / itemsPerPage)}
  marginPagesDisplayed={0}  // Adjust this value to show less pages on each side
  pageRangeDisplayed={0}   // Set this to 10 to show 10 pages at a time
  onPageChange={handlePageClick}
  containerClassName={'pagination'}
  activeClassName={'active'}
  initialPage={currentPage}
/>
    </div>
  );
};

export default PaginationComponent;
