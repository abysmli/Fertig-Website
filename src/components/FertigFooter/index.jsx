import React from "react";
import PropTypes from "prop-types";
import {translate} from 'react-i18next';
import classNames from "classnames";
import {List, ListItem, withStyles} from "@material-ui/core";

import footerStyle from "./style.jsx";

function Footer({...props}) {
    const {t, classes, whiteFont} = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                                target="_blank"
                            >
                                {t('Footer.privacyPolicy')}
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                                target="_blank"
                            >
                                {t('Footer.imprint')}
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                                target="_blank"
                            >
                                {t('Footer.terms')}
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#"
                                className={classes.block}
                                target="_blank"
                            >
                                {t('Footer.cookies')}
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={`${classes.right} ${classes.bolder}`}>
                    &copy; {1900 + new Date().getYear()} Fertig
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    t: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(translate('common')(Footer));
