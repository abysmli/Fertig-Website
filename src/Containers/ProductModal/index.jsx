import PropTypes from 'prop-types'
import React from 'react';
import {connect} from 'react-redux';
import {translate} from 'react-i18next';
import {compose} from 'recompose';
import withStyles from "@material-ui/core/styles/withStyles";
import _ from 'lodash';

import Slide from "@material-ui/core/Slide";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from "@material-ui/core/IconButton";
import withMobileDialog from '@material-ui/core/withMobileDialog';

import Product from 'Containers/Product';
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";

import iconReiniger from "assets/img/icons/reiniger.png";
import iconTee from "assets/img/icons/tee.png";
import iconKlar from "assets/img/icons/klar.png";
import iconPower from "assets/img/icons/power.png";
import iconEdel from "assets/img/icons/edel.png";
import iconTemp from "assets/img/icons/temp.png";
import iconSalz from "assets/img/icons/salz.png";

import imgIntro11 from "assets/img/productModal/imgIntro11.png";
import imgPara11 from "assets/img/productModal/imgPara11.png";
import imgUsage11 from "assets/img/productModal/imgUsage11.png";

import imgIntro12 from "assets/img/productModal/imgIntro12.png";
import imgPara12 from "assets/img/productModal/imgPara12.png";
import imgUsage12 from "assets/img/productModal/imgUsage12.png";

import imgIntro21 from "assets/img/productModal/imgIntro21.png";

import imgIntro22 from "assets/img/productModal/imgIntro22.png";

const productsDE = [
    {
        uid: 11,
        introduction: {
            name: "FERTIG Classic Tabs",
            features: [
                {
                    name: "Reiniger",
                    iconRef: iconReiniger
                },
            ],
            img: imgIntro11,
            description: "Fertig Classic sorgt für ein brillantes Reinigungsergebnis. Für ein perfektes Spülergebnis sind zusätzlich Fertig Spezial-Salz und Fertig Klarspüler zu dosieren. Gemäß der gesetzlichen Bestimmungen ist unser Fertig phosphatfrei."
        },
        parameters: {
            img: imgPara11,
            productName: "Fertig Classic Tab",
            pack: {
                "weight": "540g",
                "count": "30 Tabs"
            },
            origin: "Deutschland",
            validity: "3 Jahre",
            mixture: [
                {
                    name: "Bleichmittel auf Sauerstoffbasis"
                },
                {
                    name: "nichtionische Tenside"
                },
                {
                    name: "Polycarboxylate"
                },
                {
                    name: 'usw.'
                }
            ]
        },
        usage: {
            img: imgUsage11,
            steps: [
                {
                    step: 1,
                    description: "Grobe Speisereste vor dem Spülgang entfernen"
                },
                {
                    step: 2,
                    description: "Schutzfolie entfernen"
                },
                {
                    step: 3,
                    description: "1 Tab pro Spülgang in die Dosierkammer geben."
                },
                {
                    step: 4,
                    description: "Tab nicht in den Besteckkorb und nicht in die Salzvorratskammergeben."
                },
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "Tabs werden für Kurz- und Niedrigtemperaturprogramme nicht empfohlen, da sie sich in während der kurzen Spülzeit eventuell nicht vollständig auflösen können"
                },
                {
                    content: "Vorspülen ist nicht notwendig"
                },
                {
                    content: "Geschirr so einräumen, dass alle Fläschen von den Wasserstrahlen getroffen werden"
                },
                {
                    content: "Sprüharme müssen frei rotieren können"
                },
                {
                    content: "Spülmaschine regelmäßig reinigen"
                },
            ]
        }
    },
    {
        uid: 12,
        introduction: {
            name: "FERTIG Premium Tabs",
            features: [
                {
                    name: "Reiniger",
                    iconRef: iconReiniger
                },
                {
                    name: "Gegen Tee & Kaffeeflecken",
                    iconRef: iconTee
                },
                {
                    name: "Klarspüler",
                    iconRef: iconKlar
                },
                {
                    name: "Power-Entruster",
                    iconRef: iconPower
                },
                {
                    name: "Edelstahl- und Glassschutz",
                    iconRef: iconEdel
                },
                {
                    name: "Niedrigtemperatur-Aktiv-Formel",
                    iconRef: iconTemp
                },
                {
                    name: "Salzfunktion",
                    iconRef: iconSalz
                },
            ],
            img: imgIntro12,
            description: "Fertig Classic sorgt für ein brillantes Reinigungsergebnis. Für ein perfektes Spülergebnis sind zusätzlich Fertig Spezial-Salz und Fertig Klarspüler zu dosieren. Gemäß der gesetzlichen Bestimmungen ist unser Fertig phosphatfrei."
        },
        parameters: {
            img: imgPara12,
            productName: "Fertig Premium Tab",
            pack: {
                "weight": "540g",
                "count": "30 Tabs"
            },
            origin: "Deutschland",
            validity: "3 Jahre",
            mixture: [
                {
                    name: "Bleichmittel auf Sauerstoffbasis"
                },
                {
                    name: "Polycarboxylate"
                },
                {
                    name: "nichtionische Tenside"
                },
                {
                    name: "Polycarboxylate"
                },
            ]
        },
        usage: {
            img: imgUsage12,
            steps: [
                {
                    step: 1,
                    description: "Grobe Speisereste vor dem Spülgang entfernen"
                },
                {
                    step: 2,
                    description: "Schutzfolie entfernen"
                },
                {
                    step: 3,
                    description: "1 Tab pro Spülgang in die Dosierkammer geben."
                },
                {
                    step: 4,
                    description: "Tab nicht in den Besteckkorb und nicht in die Salzvorratskammergeben."
                },
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "Vorspülen ist nicht notwendig"
                },
                {
                    content: "Geschirr so einräumen, dass alle Fläschen von den Wasserstrahlen getroffen werden"
                },
                {
                    content: "Sprüharme müssen frei rotieren können"
                },
                {
                    content: "Spülmaschine regelmäßig reinigen"
                },
            ]
        }
    },
    {
        uid: 21,
        introduction: {
            name: "FERTIG Classic Pulver 1.0kg",
            features: [
                {
                    name: "Reiniger",
                    iconRef: iconReiniger
                },
            ],
            img: imgIntro21,
            description: "Fertig Classic Pulver entfernt selbst hartnäckige Flecken und Beläge bei jedem Spülgang – für gründliche Sauberkeit und strahlenden Glanz."
        },
        parameters: {
            img: "",
            productName: "Fertig Classic Pulver 1.0kg",
            pack: {
                "weight": "1000g",
            },
            origin: "Deutschland",
            validity: "3 Jahre",
            mixture: [
                {
                    name: "Bleichmittel auf Sauerstoffbasis"
                },
                {
                    name: "Polycarboxylate"
                },
                {
                    name: "nichtionische Tenside"
                },
                {
                    name: "Polycarboxylate"
                },
            ]
        },
        usage: {
            img: "",
            steps: [
                {
                    step: 1,
                    description: "Dosierung bei normaler Verschmutzung: 20 ml"
                },
                {
                    step: 2,
                    description: "bei starker Verschmutzung: 30 ml"
                },
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "Vorspülen ist nicht notwendig"
                },
                {
                    content: "Geschirr so einräumen, dass alle Fläschen von den Wasserstrahlen getroffen werden"
                },
                {
                    content: "Sprüharme müssen frei rotieren können"
                },
                {
                    content: "Spülmaschine regelmäßig reinigen"
                },
            ]
        }
    },
    {
        uid: 22,
        introduction: {
            name: "FERTIG Classic Pulver 1.8kg",
            features: [
                {
                    name: "Reiniger",
                    iconRef: iconReiniger
                },
            ],
            img: imgIntro22,
            description: "Fertig Classic Pulver entfernt selbst hartnäckige Flecken und Beläge bei jedem Spülgang – für gründliche Sauberkeit und strahlenden Glanz."
        },
        parameters: {
            img: "",
            productName: "Fertig Classic Pulver 1.8kg",
            pack: {
                "weight": "1800g",
            },
            origin: "Deutschland",
            validity: "3 Jahre",
            mixture: [
                {
                    name: "Bleichmittel auf Sauerstoffbasis"
                },
                {
                    name: "Polycarboxylate"
                },
                {
                    name: "nichtionische Tenside"
                },
                {
                    name: "Polycarboxylate"
                },
            ]
        },
        usage: {
            img: "",
            steps: [
                {
                    step: 1,
                    description: "Dosierung bei normaler Verschmutzung: 20 ml"
                },
                {
                    step: 2,
                    description: "bei starker Verschmutzung: 30 ml"
                },
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "Vorspülen ist nicht notwendig"
                },
                {
                    content: "Geschirr so einräumen, dass alle Fläschen von den Wasserstrahlen getroffen werden"
                },
                {
                    content: "Sprüharme müssen frei rotieren können"
                },
                {
                    content: "Spülmaschine regelmäßig reinigen"
                },
            ]
        }
    },
];

const productsCN = [
    {
        uid: 11,
        introduction: {
            name: "FERTIG标准版洗碗块",
            features: [
                {
                    name: "清洁",
                    iconRef: iconReiniger
                },
            ],
            img: imgIntro11,
            description: "此款绿色环保洗碗块，适用于各种洗碗机。按照洗碗机的使用说明进行操作，以得到更好的使用体验。此款洗碗块为标准洗涤产品，一般需要添加FERTIG洗碗盐和FERTIG光亮剂配合使用，以达到更好的洗涤效果。"
        },
        parameters: {
            img: imgPara11,
            productName: "自然洗碗机洗涤块（柠檬香）",
            pack: {
                "weight": "540克",
                "count": "30块"
            },
            origin: "德国",
            validity: "3年",
            mixture: [
                {
                    name: "等"
                },
                {
                    name: "氧漂白剂"
                },
                {
                    name: "聚羧酸盐"
                },
                {
                    name: "非离子表面活性剂"
                },
            ]
        },
        usage: {
            img: imgUsage11,
            steps: [
                {
                    step: 1,
                    description: "在洗涤前去除粗糙的食物残渣"
                },
                {
                    step: 2,
                    description: "打开洗碗机洗涤剂使用仓，一般在洗碗机的舱门内侧"
                },
                {
                    step: 3,
                    description: "撕掉洗碗块包装，放入洗涤剂使用仓，合上盖子"
                },
                {
                    step: 4,
                    description: "设置好要清洗的器具后关上洗碗机门"
                },
                {
                    step: 5,
                    description: "选择清洗程序，开始洗碗"
                }
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "不建议使用快速或低温清洗程序，因为在短时间下洗碗块可能无法充分溶解"
                },
                {
                    content: "无需预洗"
                },
                {
                    content: "合理摆放碗碟，以便所有表面都能被水流冲洗到"
                },
                {
                    content: "喷雾臂必须能够自由旋转，不被碗碟遮挡"
                },
                {
                    content: "请定期清洗洗碗机"
                },
                {
                    content: "银制、铝制品可能会褪色或变暗，铜制品不要跟银制品或者不锈钢制品放在一起洗，避免变色。将本品正确放置在专用槽内，用完以后注意密封，存储于干燥处。"
                },
                {
                    content: "放置于儿童无法触及的地方，若不慎入眼，请立马用水冲；如误食请立即送医就诊并出示商品包装。"
                }
            ]
        }
    },
    {
        uid: 12,
        introduction: {
            name: "FERTIG多效合一洗碗块",
            features: [
                {
                    name: "清洁",
                    iconRef: iconReiniger
                },
                {
                    name: "针对茶渍和咖啡渍",
                    iconRef: iconTee
                },
                {
                    name: "亮碟",
                    iconRef: iconKlar
                },
                {
                    name: "强效清洁",
                    iconRef: iconPower
                },
                {
                    name: "不锈钢玻璃器皿保护",
                    iconRef: iconEdel
                },
                {
                    name: "低温活性配方",
                    iconRef: iconTemp
                },
                {
                    name: "软化水质",
                    iconRef: iconSalz
                },
            ],
            img: imgIntro12,
            description: "此款绿色环保洗碗块，适用于各种洗碗机。按照洗碗机的使用说明进行操作，以得到更好的使用体验。此款洗碗块为标准洗涤产品，一般需要添加FERTIG洗碗盐和FERTIG光亮剂配合使用，以达到更好的洗涤效果。"
        },
        parameters: {
            img: imgPara12,
            productName: "Fertig Classic Tab",
            pack: {
                "weight": "540克",
                "count": "30块"
            },
            origin: "德国",
            validity: "3年",
            mixture: [
                {
                    name: "等"
                },
                {
                    name: "氧漂白剂"
                },
                {
                    name: "聚羧酸盐"
                },
                {
                    name: "非离子表面活性剂"
                },
            ]
        },
        usage: {
            img: imgUsage12,
            steps: [
                {
                    step: 1,
                    description: "在洗涤前去除粗糙的食物残渣"
                },
                {
                    step: 2,
                    description: "打开洗碗机洗涤剂使用仓，一般在洗碗机的舱门内侧"
                },
                {
                    step: 3,
                    description: "撕掉洗碗块包装，放入洗涤剂使用仓，合上盖子"
                },
                {
                    step: 4,
                    description: "设置好要清洗的器具后关上洗碗机门"
                },
                {
                    step: 5,
                    description: "选择清洗程序，开始洗碗"
                }
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "不建议使用快速或低温清洗程序，因为在短时间下洗碗块可能无法充分溶解"
                },
                {
                    content: "无需预洗"
                },
                {
                    content: "合理摆放碗碟，以便所有表面都能被水流冲洗到"
                },
                {
                    content: "喷雾臂必须能够自由旋转，不被碗碟遮挡"
                },
                {
                    content: "请定期清洗洗碗机"
                },
                {
                    content: "银制、铝制品可能会褪色或变暗，铜制品不要跟银制品或者不锈钢制品放在一起洗，避免变色。将本品正确放置在专用槽内，用完以后注意密封，存储于干燥处。"
                },
                {
                    content: "放置于儿童无法触及的地方，若不慎入眼，请立马用水冲；如误食请立即送医就诊并出示商品包装。"
                }
            ]
        }
    },
    {
        uid: 21,
        introduction: {
            name: "FERTIG洗碗粉1千克装",
            features: [
                {
                    name: "清洁",
                    iconRef: iconReiniger
                },
            ],
            img: imgIntro21,
            description: "Fertig洗碗粉可以有效祛除顽固污渍和沉积物，恢复碗碟的清洁和光泽"
        },
        parameters: {
            img: "",
            productName: "FERTIG洗碗粉1千克装",
            pack: {
                "weight": "1000克",
            },
            origin: "德国",
            validity: "3年",
            mixture: [
                {
                    name: "等"
                },
                {
                    name: "氧漂白剂"
                },
                {
                    name: "聚羧酸盐"
                },
                {
                    name: "非离子表面活性剂"
                },
            ]
        },
        usage: {
            img: "",
            steps: [
                {
                    step: 1,
                    description: "在洗涤前去除粗糙的食物残渣"
                },
                {
                    step: 2,
                    description: "打开洗碗机洗涤剂使用仓，一般在洗碗机的舱门内侧"
                },
                {
                    step: 3,
                    description: "向洗涤剂使用仓添满洗碗粉，合上盖子"
                },
                {
                    step: 4,
                    description: "设置好要清洗的器具后关上洗碗机门"
                },
                {
                    step: 5,
                    description: "选择清洗程序，开始洗碗"
                }
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "不建议使用快速或低温清洗程序，因为在短时间下洗碗块可能无法充分溶解"
                },
                {
                    content: "无需预洗"
                },
                {
                    content: "合理摆放碗碟，以便所有表面都能被水流冲洗到"
                },
                {
                    content: "喷雾臂必须能够自由旋转，不被碗碟遮挡"
                },
                {
                    content: "请定期清洗洗碗机"
                },
                {
                    content: "银制、铝制品可能会褪色或变暗，铜制品不要跟银制品或者不锈钢制品放在一起洗，避免变色。将本品正确放置在专用槽内，用完以后注意密封，存储于干燥处。"
                },
                {
                    content: "放置于儿童无法触及的地方，若不慎入眼，请立马用水冲；如误食请立即送医就诊并出示商品包装。"
                }
            ]
        }
    },
    {
        uid: 22,
        introduction: {
            name: "FERTIG洗碗粉1.8千克装",
            features: [
                {
                    name: "清洁",
                    iconRef: iconReiniger
                },
            ],
            img: imgIntro22,
            description: "Fertig洗碗粉可以有效祛除顽固污渍和沉积物，恢复碗碟的清洁和光泽"
        },
        parameters: {
            img: "",
            productName: "FERTIG洗碗粉1.8千克装",
            pack: {
                "weight": "1800克",
            },
            origin: "德国",
            validity: "3年",
            mixture: [
                {
                    name: "等"
                },
                {
                    name: "氧漂白剂"
                },
                {
                    name: "聚羧酸盐"
                },
                {
                    name: "非离子表面活性剂"
                },
            ]
        },
        usage: {
            img: "",
            steps: [
                {
                    step: 1,
                    description: "在洗涤前去除粗糙的食物残渣"
                },
                {
                    step: 2,
                    description: "打开洗碗机洗涤剂使用仓，一般在洗碗机的舱门内侧"
                },
                {
                    step: 3,
                    description: "向洗涤剂使用仓添满洗碗粉，合上盖子"
                },
                {
                    step: 4,
                    description: "设置好要清洗的器具后关上洗碗机门"
                },
                {
                    step: 5,
                    description: "选择清洗程序，开始洗碗"
                }
            ]
        },
        attentions: {
            img: "",
            contents: [
                {
                    content: "不建议使用快速或低温清洗程序，因为在短时间下洗碗块可能无法充分溶解"
                },
                {
                    content: "无需预洗"
                },
                {
                    content: "合理摆放碗碟，以便所有表面都能被水流冲洗到"
                },
                {
                    content: "喷雾臂必须能够自由旋转，不被碗碟遮挡"
                },
                {
                    content: "请定期清洗洗碗机"
                },
                {
                    content: "银制、铝制品可能会褪色或变暗，铜制品不要跟银制品或者不锈钢制品放在一起洗，避免变色。将本品正确放置在专用槽内，用完以后注意密封，存储于干燥处。"
                },
                {
                    content: "放置于儿童无法触及的地方，若不慎入眼，请立马用水冲；如误食请立即送医就诊并出示商品包装。"
                }
            ]
        }
    },
];

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class ProductModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: this.props.language === 'cn' ? productsCN : productsDE
        }
    }

    componentWillReceiveProps(nextProps, nextContent) {
        if (nextProps.language !== this.props.language) {
            this.setState({
                products: nextProps.language === 'cn' ? productsCN : productsDE
            })
        }
    }

    render() {
        const {
            classes,
            open,
            handleClose,
            uid
        } = this.props;

        return (
            <div>
                <Dialog
                    classes={{
                        paper: classes.paper
                    }}
                    open={open}
                    TransitionComponent={Transition}
                    onClose={handleClose}
                    scroll={'paper'}
                    aria-labelledby="scroll-dialog-title"
                    maxWidth={"md"}
                >
                    <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}>
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={handleClose}>
                            <Close className={classes.modalClose}/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText>
                            {<Product product={_.find(this.state.products, {'uid': uid})}/>}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    language: state.Language.language,
});

export default compose(
    connect(mapStateToProps),
    translate('common'),
    withStyles(landingPageStyle),
    withMobileDialog()
)(ProductModal);

ProductModal.propTypes = {
    classes: PropTypes.object,
    fetchProduct: PropTypes.func,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    uid: PropTypes.number
};