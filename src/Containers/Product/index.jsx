import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {translate} from 'react-i18next';

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GradientColorText from "components/GradientColorText";

import productStyle from "./style";
import bgIntro from 'assets/img/productModal/bgIntro.png';

class Product extends React.Component {

    renderFeatures(features) {
        return features.map(feature => {
            return (
                <div key={Math.random()}>
                    <img src={feature.iconRef} alt={feature.name}/><span>{feature.name}</span>
                </div>
            )
        })
    }

    renderIntroduction(introduction) {
        const {classes} = this.props;

        const {
            name,
            features,
            img,
            description
        } = introduction;

        return (
            <GridItem xs={12} sm={12} md={12} className={classes.item}>
                <GridContainer>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GradientColorText fontType='h2' textContent={name} customStyle={classes.caption}/>
                    </GridItem>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GradientColorText fontType='span' textContent=' ' customStyle={classes.divide}
                                           invert={true}/>
                    </GridItem>
                    <GridItem xs={12} className={`${classes.bgIntro} ${classes.itemWrapper}`}
                              style={{backgroundImage: `url(${bgIntro})`}}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12} sm={12} md={6} className={classes.featureWrapper}>
                                {this.renderFeatures(features)}
                            </GridItem>
                            {img &&
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={img} alt="img" className={classes.image}/>
                            </GridItem>
                            }
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <div className={classes.contentWrapper}>
                            {description}
                        </div>
                    </GridItem>
                </GridContainer>
            </GridItem>
        )
    }

    renderParameters(parameters) {
        const {
            t,
            classes
        } = this.props;

        const {
            img,
            productName,
            pack,
            origin,
            validity,
            mixture
        } = parameters;

        let mixtureNames = '';
        mixture.forEach((obj, index) => {
            mixtureNames = (obj.name) + ', ' + mixtureNames;
        });

        return (
            <GridItem xs={12} sm={12} md={12} className={classes.item}>
                <GridContainer>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12} sm={12} md={6}>
                                <h2 className={classes.title}>{t('product.parameters.information')}</h2>
                            </GridItem>
                            {img &&
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={img} alt="img" className={classes.image}/>
                            </GridItem>
                            }
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.table}>
                            <GridItem xs={2}
                                      className={classes.tableCell}>{t('product.parameters.productName')}</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{productName}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>{t('product.parameters.pack')}</GridItem>
                            <GridItem xs={4}
                                      className={classes.tableCell}>{`${pack.weight}${pack.count ? (pack.count) : ''}`}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>{t('product.parameters.origin')}</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{origin}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>{t('product.parameters.validity')}</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{validity}</GridItem>
                            <GridItem xs={2}
                                      className={classes.tableCell}>{t('product.parameters.ingredient')}</GridItem>
                            <GridItem xs={10} className={classes.tableCell}>{mixtureNames}</GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </GridItem>
        )
    }

    renderSteps(steps) {
        const {classes} = this.props;
        return steps.map(step => {
            return (
                <div className={classes.stepWrapper} key={Math.random()}>
                    <span className={classes.stepNumber}>{step.step}</span>
                    <span className={classes.stepDescription}>{step.description}</span>
                </div>
            )
        })
    }

    renderUsage(usage) {
        const {
            t,
            classes
        } = this.props;

        const {
            img,
            steps
        } = usage;

        return (
            <GridItem xs={12} sm={12} md={12} className={classes.item}>
                <GridContainer>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12}>
                                <h2 className={classes.title}>{t('product.usage.usage')}</h2>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.usageContentWrapper}>
                            <GridItem xs={12} sm={12} md={6} className={classes.usageContent}>
                                {this.renderSteps(steps)}
                            </GridItem>
                            {img &&
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={img} alt="img" className={classes.image}/>
                            </GridItem>
                            }
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </GridItem>
        )
    }

    renderAttentionContents(contents) {
        const {classes} = this.props;

        return contents.map(content => {
            return (
                <GridItem xs={12} className={classes.itemWrapper} key={Math.random()}>
                    <div className={classes.contentWrapper}>
                        {content.content}
                    </div>
                </GridItem>
            )
        })
    }

    renderAttentions(attentions) {
        const {
            t,
            classes
        } = this.props;

        const {
            contents
        } = attentions;

        return (
            <GridItem xs={12} sm={12} md={12} className={classes.item}>
                <GridContainer>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12}>
                                <h2 className={classes.title}>{t('product.hint.hint')}</h2>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    {this.renderAttentionContents(contents)}
                </GridContainer>
            </GridItem>
        )
    }

    render() {
        const {
            classes,
            product
        } = this.props;

        const {
            introduction,
            parameters,
            usage,
            attentions
        } = product;

        return (
            <GridContainer className={classes.container}>
                {this.renderIntroduction(introduction)}
                {this.renderParameters(parameters)}
                {this.renderUsage(usage)}
                {this.renderAttentions(attentions)}
            </GridContainer>
        )
    }
}

export default withStyles(productStyle)(translate('common')(Product));

