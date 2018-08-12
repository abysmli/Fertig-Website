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
import imgIntro12 from "assets/img/productModal/imgIntro12.png";
import imgPara12 from "assets/img/productModal/imgPara12.png";
import imgUsage12 from "assets/img/productModal/imgUsage12.png";

const products = [
    {
        uid: 12,
        introduction: {
            name: "FERTIG Classic Tabs",
            features: [
                {
                    name: "Reiniger",
                    iconRef: iconReiniger
                }
            ],
            img: imgIntro12,
            description: "Fertig Classic sorgt für ein brillantes Reinigungsergebnis. Für ein perfektes Spülergebnis sind zusätzlich Somat Spezial-Salz und Somat Klarspüler zu dosieren. Gemäß der gesetzlichen Bestimmungen ist unser Somat phosphatfrei."
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
    }
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