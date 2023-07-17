import React, { Component } from 'react';
import { connect } from 'react-redux';
import Watch from '../Watch/Watch.tsx';
import { setLanguage } from '../../redux/actions/launguageAction.ts';
import './Header.css';
import LanguageSelect from "../LanguageSelect/LanguageSelect";


const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbn8OW2UsncH0jDvlAIIO-WLFQCliC-igJvw&usqp=CAU"

interface MyProps {}
interface MyState {}


class Header extends Component<MyProps, MyState> {



    render() {
        const { currentTime,selectedLanguage,setLanguage } = this.props;

        return (
            <header className="header">
                <img
                    src={image}
                    alt="Logo"
                    className="header-image"
                />
                <div className="header-right-block">
                    <Watch currentTime={currentTime} />
                   <LanguageSelect selectedLanguage={selectedLanguage} setLanguage={setLanguage} />
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedLanguage: state.language,
    currentTime: new Date().toLocaleTimeString()
});



export default connect(mapStateToProps, {setLanguage})(Header);
