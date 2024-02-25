import React from 'react'
import './pagination.css';

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    pagesList,
    itemsPerPage,
    setItemPerPage }) => {

    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));

    if (totalPages - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    const handleListCount = (event) => {
        setItemPerPage(event.target.value)
    }
    return (
        <section className='pagination-item'>
            <div className='select-item'>
                <label htmlFor="itemsPerPage" className='show-label'>Show </label>
                <select id="itemsPerPage" value={itemsPerPage} onChange={handleListCount}>
                    {pagesList.map((num,index) => { return (<option key={index} value={num}>{num}</option>) })}
                </select>
            </div>
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                        onClick={() => onPageChange(currentPage - 1)} 
                        className="page-link" 
                        disabled={currentPage === 1}
                        >
                             &lt;
                        </button>
                    </li>
                    {pageNumbers.map(number => (
                        <li 
                        key={number} 
                        className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button 
                            onClick={() => onPageChange(number)} 
                            className="page-link"
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                        onClick={() => onPageChange(currentPage + 1)} 
                        className="page-link" 
                        disabled={currentPage === totalPages}
                        >
                            &gt;
                            {/* &raquo; */}
                        </button>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default Pagination