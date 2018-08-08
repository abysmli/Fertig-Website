import PropTypes from 'prop-types'
import React from 'react';
import {connect} from 'react-redux';
import {translate} from 'react-i18next';
import {compose} from 'recompose';
import withStyles from "@material-ui/core/styles/withStyles";

import Slide from "@material-ui/core/Slide";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from "@material-ui/core/IconButton";
import withMobileDialog from '@material-ui/core/withMobileDialog';

import modalImg from 'assets/img/carousel/modal.jpg';
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class CarouselModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //this.props.fetchProduct(this.props.uid);
    }

    render() {
        const {
            classes,
            open,
            handleClose
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
                            <img src={modalImg} alt="missing img"/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = dispatch => ({});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    translate('common'),
    withStyles(landingPageStyle),
    withMobileDialog()
)(CarouselModal);

CarouselModal.propTypes = {
    classes: PropTypes.object,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    uid: PropTypes.number
};