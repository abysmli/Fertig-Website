import React from "react";
import {connect} from 'react-redux';
import {translate} from 'react-i18next';
import {compose} from 'recompose';
import {withRouter} from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

import HeaderRightLinks from "components/Header/HeaderRightLinks.jsx";
import HeaderMiddleLinks from "components/Header/HeaderMiddleLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/ContactSection.jsx";
import SectionCarousel from "./Sections/CarouselSections";
// Assets
import BrandImg from 'assets/img/brand.png';

// @material-ui/icons

const dashboardRoutes = [];

class LandingPage extends React.Component {
    render() {
        const {classes, ...rest} = this.props;
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
                <Parallax filter image={require("assets/img/landing-bg.jpg")} id='jumbotron'>

                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <ProductSection/>
                        <TeamSection/>
                        <WorkSection/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    translate('common'),
    withStyles(landingPageStyle)
)(LandingPage);
