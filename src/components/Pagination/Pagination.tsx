import {PAGE_LIMIT} from "../../helpers/constants";
import {Component} from "react";
import './Pagination.css'
import { Review } from "../../redux/actions/reviewsAction";


interface MyProps {
    reviews: Record<string, Review[]>;
    currentPage: number;
    lang: string;
    setCurrentPage: (page: number) => void;

}

interface MyState {}

class Pagination extends Component<MyProps, MyState> {
    maxPagesToShow = 5;

    handlePrevPage = () => {
        const { currentPage, setCurrentPage } = this.props;
        setCurrentPage(currentPage - 1);
    };

    handleNextPage = () => {
        const { currentPage, setCurrentPage } = this.props;
        setCurrentPage(currentPage + 1);
    };

    render() {
        const { reviews, currentPage, lang, setCurrentPage } = this.props;
        const totalPages = Math.ceil(reviews[lang].length / PAGE_LIMIT);



        if (reviews.length <= PAGE_LIMIT) {
            return null;
        }
        let startPage, endPage;

        if (totalPages <= this.maxPagesToShow) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const midPage = Math.ceil(this.maxPagesToShow / 2);
            if (currentPage <= midPage) {
                startPage = 1;
                endPage = this.maxPagesToShow;
            } else if (currentPage >= totalPages - midPage) {
                startPage = totalPages - this.maxPagesToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - midPage + 1;
                endPage = currentPage + midPage - 1;
            }
        }

        return (
            <div className="pagination">
                {startPage > 1 && (
                    <>
                        <button className="pagination-button" onClick={() => setCurrentPage(1)}>
                            1
                        </button>
                        {startPage > 2 && <span className="pagination-dots">...</span>}
                    </>
                )}
                {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`pagination-button ${currentPage === pageNumber ? 'active' : ''}`}
                        onClick={() => setCurrentPage(pageNumber as number)}
                    >
                        {pageNumber}
                    </button>
                ))}
                {endPage < totalPages && (
                    <>
                        {endPage < totalPages - 1 && <span className="pagination-dots">...</span>}
                        <button
                            className="pagination-button"
                            onClick={() => setCurrentPage(totalPages)}
                        >
                            {totalPages}
                        </button>
                    </>
                )}
            </div>
        );
    }
}

export default Pagination;
