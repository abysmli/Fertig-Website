import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui components
import Hidden from '@material-ui/core/Hidden';
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import GradientColorText from "components/GradientColorText";
import carouselStyle from "assets/jss/material-kit-react/views/landingPageSections/carouselStyle"

import image1 from "assets/img/carousel/1.jpg";
import image2 from "assets/img/carousel/2.jpg";
import image3 from "assets/img/carousel/3.jpg";
import carouselFirst from "assets/img/carousel/carousel-first.png";

class SectionCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };

        const {classes} = this.props;
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card className={classes.card}>
                        <Carousel {...settings}>
                            <div>
                                <div className={classes.carouselBackgroundImg}
                                     style={{backgroundImage: `url(${image1})`}}/>
                                <GridContainer className="fertig-slick-caption" alignItems={"center"}>
                                    <GridItem xs={12} sm={12} md={12} lg={6} className="fertig-slick-caption-item">
                                        <Hidden mdDown>
                                            <GradientColorText fontType='h1'
                                                               textContent='来自德国的专业清洁品牌'/>
                                        </Hidden>
                                        <Hidden lgUp>
                                            <GradientColorText fontType='h3'
                                                               textContent='来自德国的专业清洁品牌'/>
                                        </Hidden>
                                        <br/>
                                        <GradientColorText fontType='h5'
                                                           textContent='高效清洁 环保健康'
                                                           invert/>
                                        <br/>
                                        <a className="fertig-caption-button">
                                            了解更多>
                                        </a>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12} lg={6} className="fertig-slick-caption-item">
                                        <img src={carouselFirst} alt="products" className="fertig-caption-img"/>
                                    </GridItem>
                                </GridContainer>
                            </div>
                            <div>
                                <div className={classes.carouselBackgroundImg}
                                     style={{backgroundImage: `url(${image2})`}}/>
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons"/>Somewhere Beyond,
                                        United States
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <div className={classes.carouselBackgroundImg}
                                     style={{backgroundImage: `url(${image3})`}}/>
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons"/>Yellowstone
                                        National Park, United States
                                    </h4>
                                </div>
                            </div>
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

export default withStyles(carouselStyle)(SectionCarousel);