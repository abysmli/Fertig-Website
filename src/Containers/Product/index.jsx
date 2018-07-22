import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GradientColorText from "components/GradientColorText";

import productStyle from "./style";
import icon1 from 'assets/img/icons/1.png';
import icon2 from 'assets/img/icons/2.png';
import icon3 from 'assets/img/icons/3.png';
import bgIntro from 'assets/img/productModal/bgIntro.png';
import imgIntro from 'assets/img/productModal/imgIntro.png';
import imgPara from 'assets/img/productModal/imgPara.png';

const product = {
    introduction: {
        name: 'FERTIG洗碗块标准版',
        features: [
            {
                name: '高效溶解',
                iconRef: icon1
            },
            {
                name: '自然清新',
                iconRef: icon2,
            },
            {
                name: '无残留',
                iconRef: icon3
            }
        ],
        img: imgIntro,
        description: '此款绿色环保洗碗块，适用于各种洗碗机。按照洗碗机的使用说明进行操作，以得到更好的使用体验。此款洗碗块为标准洗涤产品，一般需要添加FERTIG洗碗盐和FERTIG光亮剂配合使用，以达到更好的洗涤效果。',
    },
    parameters: {
        img: imgPara,
        productName: '自然洗碗机洗涤块\n（柠檬香）',
        pack: {
            weight: '540g',
            count: '30块'
        },
        origin: '德国',
        validity: '三年',
        mixture: [
            {
                name: '碳酸钠',
            },
            {
                name: '过碳酸钠'
            }
        ]
    },
    usage: {
        img: '',
        steps: [
            {
                step: 1,
                description: '打开洗碗块包装块，取出一块洗碗块，撕开包装'
            },
            {
                step: 2,
                description: '打开洗碗机洗涤块使用仓，一般在洗碗机的舱门内侧'
            },
            {
                step: 3,
                description: '放入洗碗块，合上盖子'
            },
            {
                step: 4,
                description: '设置好要清洗的器具后关上洗碗机门'
            },
            {
                step: 5,
                description: '选择清洗程序，开始洗碗'
            }
        ]
    },
    attentions: {
        img: '',
        attention: [{
            content: '银制、铝制品可能会褪色或变暗，铜制品不要跟银制品或者不锈钢制品放在一起洗，避免变色。将本品正确放置在专用槽内，用完以后注意密封，存储于干燥处。'
        }, {
            content: '放置于儿童无法触及的地方，若不慎入眼，请立马用水冲；如误食请立即送医就诊并出示商品包装。'
        }
        ]
    }
};

class Product extends React.Component {

    renderFeatures(features) {
        return features.map(feature => {
            return (
                <div>
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
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={img} alt="img" className={classes.image}/>
                            </GridItem>
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
        const {classes} = this.props;

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
            mixtureNames = (obj.name) + ',' + mixtureNames;
        });

        return (
            <GridItem xs={12} sm={12} md={12} className={classes.item}>
                <GridContainer>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.contentWrapper}>
                            <GridItem xs={12} sm={12} md={6}>
                                <h2 className={classes.title}>产品参数</h2>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <img src={img} alt="img" className={classes.image}/>
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={12} className={classes.itemWrapper}>
                        <GridContainer className={classes.table}>
                            <GridItem xs={2} className={classes.tableCell}>产品名称</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{productName}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>规格</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{`${pack.weight}(${pack.count})`}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>产地</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{origin}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>有效期</GridItem>
                            <GridItem xs={4} className={classes.tableCell}>{validity}</GridItem>
                            <GridItem xs={2} className={classes.tableCell}>成分</GridItem>
                            <GridItem xs={10} className={classes.tableCell}>{mixtureNames}</GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            </GridItem>
        )
    }

    render() {
        const {classes} = this.props;

        const {
            introduction,
            parameters
        } = product;

        return (
            <GridContainer className={classes.container}>
                {this.renderIntroduction(introduction)}
                {this.renderParameters(parameters)}
            </GridContainer>
        )
    }
}

export default withStyles(productStyle)(Product);

