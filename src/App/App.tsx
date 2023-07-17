import { Component } from 'react';
import './App.css';
import  Header  from '../components/Header/Header';
import ReviewList from '../pages/ReviewList/MainPage';

interface MyProps {}
interface MyState {}

class App extends Component<MyProps, MyState> {


    render() {
        return (
            <div className="App">
                <Header />
                <ReviewList />
            </div>
        );
    }
}



export default App;
