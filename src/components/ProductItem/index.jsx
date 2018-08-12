import PropTypes from 'prop-types'
import React from 'react';
import {translate} from "react-i18next";
import withStyles from "@material-ui/core/styles/withStyles";

import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button";
import GradientColorText from "components/GradientColorText";

import productItemStyle from "./style";

class ProductItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const {
            uid,
            setSelectedUid,
            showDetails
        } = this.props;

        if (typeof setSelectedUid === 'function') {
            setSelectedUid(uid);
        }
        if (typeof showDetails === 'function') {
            showDetails();
        }
    }

    render() {
        const {
            t,
            classes,
            uid,
            img,
            title,
            titleLabel,
            subtitle,
            buttonText,
        } = this.props;

        return (
            <GridItem xs={12} sm={12} md={6} className={classes.wrapper} id={uid}>
                <div className={classes.imgWrapper}>
                    <img src={img} alt="product" className={classes.img}/>
                </div>
                <div className={classes.titleWrapper}>
                    {titleLabel &&
                    <GradientColorText fontType='h4'
                                       textContent={titleLabel}
                                       customStyle={classes.titleLabel}
                                       invert/>
                    }
                    <h3 className={classes.title}>{title}</h3>
                </div>
                <h5 className={classes.subtitle}>{subtitle}</h5>
                <Button color="primary" className={classes.button} onClick={this.handleClick}>
                    <span className={classes.buttonText}>{buttonText ? buttonText : t('sections.more')}</span>
                </Button>
            </GridItem>
        )
    }
}

export default withStyles(productItemStyle)(translate('common')(ProductItem));

ProductItem.propTypes = {
    buttonText: PropTypes.string,
    classes: PropTypes.object.isRequired,
    img: PropTypes.string,
    setSelectedUid: PropTypes.func,
    showDetails: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    titleLabel: PropTypes.string,
    uid: PropTypes.number
};