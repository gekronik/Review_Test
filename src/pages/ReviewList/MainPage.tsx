import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/actions/currentPageAction.ts';
import './MainPage.css';
import { PAGE_LIMIT } from '../../helpers/constants.ts'
import { formatClientName } from '../../helpers/utils.ts';
import currentPageReducer from "../../redux/reducers/currentPageReducer";
import {fetchReviews,Review} from "../../redux/actions/reviewsAction";
import Pagination from "../../components/Pagination/Pagination";


interface MyProps {
    reviews: Record<string, Review[]>;
    currentPage: number;
    lang: string;
    setCurrentPage: (page: number) => currentPageReducer;
    fetchReviews: () => void;
}
interface MyState {}

class MainPage extends Component<MyProps, MyState> {


    componentDidMount() {
        this.props.fetchReviews();
    }


    render() {
        const { reviews, currentPage, lang } = this.props;
        const startIndex = (currentPage - 1) * PAGE_LIMIT;
        const endIndex = startIndex + PAGE_LIMIT;
        const paginatedReviews = reviews[lang]?.slice(startIndex, endIndex);

        return (
            <div className="review-list">
                {paginatedReviews.map((review) => (
                    <div className="review" key={review.id}>
                        <h3 className="review-name">{formatClientName(review.name)}</h3>
                        <p className="review-text">{review.review}</p>
                        <p className="review-date">{review.date}</p>
                    </div>
                ))}
                <Pagination  reviews={reviews}
                             currentPage={currentPage}
                             lang={lang}
                             setCurrentPage={this.props.setCurrentPage}/>
            </div>
        );
    }
}
const mapStateToProps = (state: {
    reviews: Record<string, Review[]>;
    currentPage: number;
    language: string;
}) => ({
    reviews: state.reviews,
    currentPage: state.currentPage,
    lang: state.language,
});

export default connect(mapStateToProps, { setCurrentPage,fetchReviews })(MainPage);
