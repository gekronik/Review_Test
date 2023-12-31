import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import App from './App/App.tsx';
import './styles/index.css';

ReactDOM.render(
        <Provider store={store}>
            <App className='main'/>
        </Provider>,
    document.getElementById('root')
);
