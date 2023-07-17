import React, { Component } from 'react';
import './Watch.css'


interface MyProps {}
interface MyState {
    time: string;
}

class Watch extends Component<MyProps, MyState> {
    timerRef = null;

    constructor(props: MyProps) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
        this.timerRef = React.createRef<number>();
    }
    componentDidMount() {
        this.timerRef.current = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString();
            this.setState({ time: currentTime });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerRef.current) {
            clearInterval(this.timerRef.current);
        }
    }
    render() {
        const { time } = this.state;

        return (
            <div className='clock'>
                <p className='time'>{time}</p>
            </div>
        );
    }
}

export default Watch;
