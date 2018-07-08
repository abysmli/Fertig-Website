/*eslint-disable*/
import React from "react";
import i18n from 'i18next';
import { translate } from 'react-i18next';
// react components for routing our app without refresh
import {Link} from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import {Apps, QuestionAnswer} from "@material-ui/icons";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import 'flag-icon-css/css/flag-icon.min.css';
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

class HeaderMiddleLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            t,
            classes
        } = this.props;

        return (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <CustomDropdown
                        noLiPadding
                        buttonText={t('navigation_product')}
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={Apps}
                        dropdownList={[
                            <a href="#tabs"
                               className={classes.dropdownLink}
                            >
                                {t('navigation_tabs')}
                            </a>,
                            <a
                                href="#powder"
                                className={classes.dropdownLink}
                            >
                                {t('navigation_powder')}
                            </a>
                        ]}
                    />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <Button
                        href="https://www.creative-tim.com/product/material-kit-react"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <QuestionAnswer className={classes.icons}/> {t('navigation_faq')}
                    </Button>
                </ListItem>
            </List>
        );

    }
}

export default translate('common')(withStyles(headerLinksStyle)(HeaderMiddleLinks));
