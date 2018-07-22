import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import Product from 'Containers/Product';

import ProductModalStyle from 'Containers/ProductModal/style';

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
                    open={open}
                    onClose={handleClose}
                    scroll={'paper'}
                    aria-labelledby="scroll-dialog-title"
                    maxWidth={"900px"}
                >
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText>
                            {<Product/>}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            返回
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(ProductModalStyle)(withMobileDialog()(ProductModal));