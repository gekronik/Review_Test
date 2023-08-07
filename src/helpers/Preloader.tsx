import {Component} from 'react';
import preloader from "../../../assets/images/preloader.svg";

class Preloader extends Component<MyProps, MyState> {

render() {
    return (
        <div>
            <img src={preloader} />
    </div>
);
}

};

export default Preloader;