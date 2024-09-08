import React, { useState }  from "react";
import leftArrow from '../../../assets/svg/left_arrow.svg';
import rightArrow from '../../../assets/svg/right_arrow.svg';
import CardDetail from '../../../components/screens_component/dashboard_components/card_detail';
function EnquirySection(params) {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Calculate the indices of items to be shown on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(50 / 10);

    // Function to change pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(<div className='enquiries-container'>
        <div className='pagination-secetion'>
            <img src={leftArrow} />
            {Array.from({ length: totalPages }, (_, index) => <text onClick={() => paginate(index + 1)} style={{
                fontSize: '20px',
                height: '20px',
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', // Centers vertically
                alignItems: 'center', // Centers horizontally
                backgroundColor: index + 1 == currentPage ? "#0083A0" : "#FFFFFF",
                borderRadius: '50%', // Makes the shape circular
                margin: '5px',
                padding: '3px',
                width: '20px',
                color: index + 1 == currentPage ? 'white' : "#0083A0",
                textAlign: 'center', 
                cursor: 'pointer'
            }}>{index + 1}</text>)}
            <img src={rightArrow} /></div>
        <div className='enquiry-cards-container' >
            {data.map((item, index) => <CardDetail />)}
        </div>
    </div>);
}

export default EnquirySection;