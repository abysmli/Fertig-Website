import PropTypes from 'prop-types'
import React from 'react';
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

const products = [
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

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class ProductModal extends React.Component {
    constructor(props) {
        super(props)
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
                            {<Product product={_.find(products, {'uid': uid})}/>}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default compose(
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