import React from "react";
import {compose} from "recompose";
import {translate} from "react-i18next";
import {connect} from "react-redux";
import _ from "lodash";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui components
import Hidden from '@material-ui/core/Hidden';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import GradientColorText from "components/GradientColorText";
import CarouselModal from "Containers/CarouselModal";
import carouselStyle from "assets/jss/material-kit-react/views/landingPageSections/carouselStyle";
import * as ProductsActions from "../../../Reducers/Products/Actions";

class SectionCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.props.fetchCarousel();
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    renderCarousels() {
        const {
            t,
            carousels,
            classes,
        } = this.props;

        return carousels.map(carousel => {
            const uid = _.get(carousel, 'uid');
            const title = _.get(carousel, 'title');
            const label = _.get(carousel, 'label', '');
            const img = _.get(carousel, 'imgRef');
            const bgImg = _.get(carousel, 'backgroundImgRef');
            return (
                <div key={uid}>
                    <div className={classes.carouselBackgroundImg}
                         style={{backgroundImage: `url(${bgImg})`}}/>
                    <GridContainer className="fertig-slick-caption" alignItems={"center"}>
                        <GridItem xs={12} sm={12} md={12} lg={6} className="fertig-slick-caption-item">
                            <Hidden mdDown>
                                <GradientColorText fontType='h1'
                                                   textContent={title}/>
                            </Hidden>
                            <Hidden lgUp>
                                <GradientColorText fontType='h3'
                                                   textContent={title}/>
                            </Hidden>
                            <br/>
                            {label &&
                            <GradientColorText fontType='h5'
                                               textContent={label}
                                               invert/>
                            }
                            <br/>
                            <button className="fertig-caption-button" onClick={this.toggleModal}>
                                {t('carousel.more').toUpperCase()}>
                            </button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} lg={6} className="fertig-slick-caption-item">
                            <img src={img} alt="products" className="fertig-caption-img"/>
                        </GridItem>
                    </GridContainer>
                    {this.state.isModalOpen &&
                    <CarouselModal open={this.state.isModalOpen}
                                   handleClose={this.toggleModal}/>
                    }
                </div>
            )
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };

        const {
            classes,
            carousels
        } = this.props;

        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card className={classes.card}>
                        <Carousel {...settings}>
                            {carousels && this.renderCarousels()}
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

const mapStateToProps = (state, props) => ({
    showCarouselLoader: state.Loaders.showCarouselLoader,
    carousels: state.Products.carousels
});

const mapDispatchToProps = dispatch => ({
    fetchCarousel: () => dispatch(ProductsActions.fetchCarousel())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(carouselStyle),
    translate('common'),
)(SectionCarousel);