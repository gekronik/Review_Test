import React, {Component,ChangeEvent} from "react";
import './LanguageSelect.css';

interface MyProps {
    selectedLanguage: string;
    setLanguage: (language: string) => void;
}
interface MyState {

}

class LanguageSelect extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }
    handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
        this.props.setLanguage(event.target.value);
    }

    render() {
        return (
            <select className="language-select" value={this.props.selectedLanguage} onChange={this.handleLanguageChange}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>
        )
    }
}
export default LanguageSelect;
