import PropTypes from 'prop-types'
import React from "react";
import {connect} from 'react-redux';
import {translate} from 'react-i18next';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
import {RingLoader} from 'react-spinners';
// nodejs library that concatenates classes
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import HeaderRightLinks from "components/Header/HeaderRightLinks.jsx";
import HeaderMiddleLinks from "components/Header/HeaderMiddleLinks.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
// Sections for this page
import SectionCarousel from "./Sections/CarouselSections";
import ProductSection from "Containers/ProductSection";
// Assets
import BrandImg from 'assets/img/brand.png';
// Actions
import * as ProductsActions from 'Reducers/Products/Actions';


// @material-ui/icons

const dashboardRoutes = [];

class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.props.fetchProductSection();
    }

    renderProductSections() {
        const {
            productSections,
        } = this.props;

        console.log(productSections);

        return productSections.map(productSection => {
            return (
                <ProductSection productSection={productSection}/>
            )
        })
    }

    render() {
        const {
            showProductSectionLoader,
            ...rest
        } = this.props;

        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand={<img src={BrandImg} style={{height: 70, width: 'auto'}}/>}
                    middleLinks={<HeaderMiddleLinks/>}
                    rightLinks={<HeaderRightLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 50,
                        color: "white"
                    }}
                    {...rest}
                />
                <SectionCarousel/>
                {showProductSectionLoader ?
                    <div className='sweet-loading'>
                        <RingLoader
                            color={'#123abc'}
                            loading={showProductSectionLoader}
                        />
                    </div>
                    :
                    this.renderProductSections()
                }
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    showProductSectionLoader: state.Loaders.showProductSectionLoader,
    productSections: state.Products.productSections
});

const mapDispatchToProps = dispatch => ({
    fetchProductSection: () => dispatch(ProductsActions.fetchProductSection())
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    translate('common'),
    withStyles(landingPageStyle)
)(LandingPage);

LandingPage.propTypes = {
    fetchProductSection: PropTypes.func,
    productSections: PropTypes.array
};

LandingPage.defaultProps = {
    productSections: []
};