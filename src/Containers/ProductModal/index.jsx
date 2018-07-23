import React from 'react';
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
import ProductModalStyle from 'Containers/ProductModal/style';

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
                    maxWidth={"900px"}
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

export default withStyles(ProductModalStyle)(withMobileDialog()(ProductModal));