import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Const from 'Core/Const';
import {translate} from 'react-i18next';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import _ from 'lodash';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import GradientColorText from "components/GradientColorText";
import ProductItem from "components/ProductItem";
import ProductModal from "Containers/ProductModal";
// assets
import productSectionStyle from "./style";
import * as ProductsActions from "Reducers/Products/Actions";

class ProductSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDetailsModalOpen: false,
            selectedUid: null,
        };

        this.toggleDetailsModal = this.toggleDetailsModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(uid) {
        //this.props.fetchProduct(uid);
        this.setState({
            selectedUid: uid
        });
        this.toggleDetailsModal();
    }

    toggleDetailsModal() {
        this.setState({
            isDetailsModalOpen: !this.state.isDetailsModalOpen
        })
    }

    renderProductItems(products) {
        return products.map(item => {
            const img = _.get(item, 'imgRef');
            const id = _.get(item, 'id');
            const uid = _.get(item, 'uid');
            const name = _.get(item, 'name');
            const label = _.get(item, 'label');
            const description = _.get(item, 'description');
            return (
                <ProductItem id={id}
                             key={id}
                             uid={uid}
                             img={img}
                             title={name}
                             titleLabel={label}
                             subtitle={description}
                             handleClick={this.handleClick}/>
            )
        })
    }

    render() {
        const {
            t,
            classes,
            productSection
        } = this.props;

        const series = _.get(productSection, 'series');
        const products = _.get(productSection, 'products', []);

        let sectionTitle = '';

        switch (series) {
            case Const.series.tab: {
                sectionTitle = t('sections.title.tab');
                break;
            }

            case Const.series.powder: {
                sectionTitle = t('sections.title.powder');
                break;
            }

        }

        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card className={classes.card}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12} className={classes.itemWrapper}>
                                <GradientColorText fontType='h2' textContent={sectionTitle}
                                                   customStyle={classes.caption}/>
                            </GridItem>
                            <GridItem xs={12} className={classes.itemWrapper}>
                                <GradientColorText fontType='span' textContent=' ' customStyle={classes.divide}
                                                   invert={true}/>
                            </GridItem>
                            <GridItem xs={12}>
                                <GridContainer>
                                    {this.renderProductItems(products)}
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                    </Card>
                </GridItem>
                {this.state.isDetailsModalOpen &&
                <ProductModal open={this.state.isDetailsModalOpen}
                              uid={this.state.selectedUid}
                              handleClose={this.toggleDetailsModal}/>
                }
            </GridContainer>
        );
    }
}

const mapStateToProps = (state, props) => ({
    showProductLoader: state.Loaders.showProductLoader,
    selectedProduct: state.Products.selectedProduct
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: (uid) => dispatch(ProductsActions.fetchProduct(uid))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(productSectionStyle),
    translate('common'),
)(ProductSection);