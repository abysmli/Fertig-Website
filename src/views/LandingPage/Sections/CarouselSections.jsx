import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import carouselStyle from "assets/jss/material-kit-react/views/landingPageSections/carouselStyle";

import image1 from "assets/img/carousel/1.jpg";
import image2 from "assets/img/carousel/2.jpg";
import image3 from "assets/img/carousel/3.jpg";

class SectionCarousel extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
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
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons"/>Yellowstone
                                        National Park, United States
                                    </h4>
                                </div>
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