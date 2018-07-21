import PropTypes from 'prop-types'
import React from "react";

class GradientColorText extends React.Component {
    render() {

        const {
            invert,
            customStyle,
            fontType,
            textContent,
        } = this.props;

        const style = invert ? 'gradient-color-box' : 'gradient-color-text';

        switch (fontType) {
            case 'h1': {
                return (
                    <h1 className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </h1>
                )
            }
            case 'h2': {
                return (
                    <h2 className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </h2>
                )
            }
            case 'h3': {
                return (
                    <h3 className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </h3>
                )
            }
            case 'h4': {
                return (
                    <h4 className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </h4>
                )
            }
            case 'h5': {
                return (
                    <h5 className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </h5>
                )
            }
            case 'h6': {
                return (
                    <h6 className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </h6>
                )
            }
            case 'p': {
                return (
                    <p className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </p>
                )
            }
            case 'span': {
                return (
                    <span className={`${style} ${customStyle}`} style={{fontSize: `${fontType}px`}}>
                        {textContent}
                    </span>
                )
            }
        }
    }
}

export default GradientColorText;

GradientColorText.propTypes = {
    customStyle: PropTypes.string,
    fontType: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'p'
    ]).isRequired,
    invert: PropTypes.bool,
    textContent: PropTypes.string.isRequired
};

GradientColorText.defaultProps = {
    customStyle: '',
    invert: false
};