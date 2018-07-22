import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import GradientColorText from "components/GradientColorText";
import ProductItem from "components/ProductItem";
import ProductModal from "Containers/ProductModal";
// assets
import productSectionStyle from "./style";
import classicTab from 'assets/img/products/classic-tabs.png';
import premiumTab from 'assets/img/products/premium-tabs.png';

class ProductSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDetailsModalOpen: false
        };

        this.showDetailsModal = this.showDetailsModal.bind(this);
    }

    showDetailsModal() {
        this.setState({
            isDetailsModalOpen: !this.state.isDetailsModalOpen
        })
    }

    renderProductItems() {
        const productItems = [{
            img: classicTab,
            title: 'FERTIG洗碗块标准版',
            titleLabel: null,
            subtitle: '主要成分生物酶制剂、表面活性剂、柠檬酸钠，可强效分解油污及顽固食物残渣；易冲洗，无残留，可放心长期使用',
            buttonText: '',
        }, {
            img: premiumTab,
            title: 'FERTIG洗碗块高级版',
            titleLabel: '多效合一',
            subtitle: '在普通清洗基础上添加更多功能，针对茶渍、咖啡渍增加清洁能力，保护餐具，使其长期保持如新的光泽，满足更高品质的生活要求',
            buttonText: '',
        }];
        return productItems.map(item => {
            const {
                img,
                title,
                titleLabel,
                subtitle,
                buttonText,
            } = item;
            return (
                <ProductItem img={img}
                             title={title}
                             titleLabel={titleLabel}
                             subtitle={subtitle}
                             buttonText={buttonText}
                             showDetails={this.showDetailsModal}/>
            )
        })
    }

    render() {
        const {classes} = this.props;
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card className={classes.card}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12} className={classes.itemWrapper}>
                                <GradientColorText fontType='h2' textContent='洗碗块系列' customStyle={classes.caption}/>
                            </GridItem>
                            <GridItem xs={12} className={classes.itemWrapper}>
                                <GradientColorText fontType='span' textContent=' ' customStyle={classes.divide}
                                                   invert={true}/>
                            </GridItem>
                            <GridItem xs={12} className={classes.itemWrapper}>
                                <h5 className={classes.subCaption}>DISHWASHING TABS</h5>
                            </GridItem>
                            <GridItem xs={12}>
                                <GridContainer>
                                    {this.renderProductItems()}
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                    </Card>
                </GridItem>
                {this.state.isDetailsModalOpen &&
                <ProductModal open={this.state.isDetailsModalOpen}
                              handleClose={this.showDetailsModal}/>
                }
            </GridContainer>
        );
    }
}

export default withStyles(productSectionStyle)(ProductSection);