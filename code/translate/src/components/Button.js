import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends Component {



    render() {
        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(language) => language === 'english' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                    </button>   
                )}
            </ColorContext.Consumer>
        )
    }
}

export default Button;