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

import Product from 'Containers/Product';
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import * as ProductsActions from "../../Reducers/Products/Actions";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";

function Transition(props) {
    return <Slide direction="down" {...props} />;
}

class ProductModal extends React.Component {
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
                            {<Product/>}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
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