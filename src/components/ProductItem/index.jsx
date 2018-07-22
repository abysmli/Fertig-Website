import PropTypes from 'prop-types'
import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button";
import GradientColorText from "components/GradientColorText";

import productItemStyle from "./style";

class ProductItem extends React.Component {
    render() {
        const {
            classes,
            img,
            title,
            titleLabel,
            subtitle,
            buttonText,
            showDetails
        } = this.props;

        return (
            <GridItem xs={12} sm={12} md={6} className={classes.wrapper}>
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
                <Button color="primary" className={classes.button} onClick={showDetails}>
                    <span className={classes.buttonText}>{buttonText ? buttonText : '产品详情'}</span>
                </Button>
            </GridItem>
        )
    }
}

export default withStyles(productItemStyle)(ProductItem);

ProductItem.propTypes = {
    buttonText: PropTypes.string,
    classes: PropTypes.object.isRequired,
    img: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.object,
    titleLabel: PropTypes.string,
    showDetails: PropTypes.func
};

ProductItem.defaultProps = {
    buttonText: '产品详情'
};