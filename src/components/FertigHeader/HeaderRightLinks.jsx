/*eslint-disable*/
import React from "react";
import i18n from 'i18next';
import {connect} from 'react-redux';
import {translate} from 'react-i18next';
import {compose} from 'recompose';
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.jsx";

import 'flag-icon-css/css/flag-icon.min.css';
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import * as LanguageActions from "../../Reducers/Language/Actions";

class HeaderRightLinks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLanguage: 'de'
        }
    }


    handleLanguageSwitch(language) {
        if (language === 'de') {
            i18n.init({fallbackLng: 'de_DE'});
        }
        /*
        if (language === 'en') {
            i18n.init({fallbackLng: 'en_US'});
        }
        */
        if (language === 'cn') {
            i18n.init({fallbackLng: 'zh_CN'});
        }

        this.props.setLanguage(language);

        this.setState({
            selectedLanguage: language,
        })
    }

    render() {
        const {
            classes
        } = this.props;

        return (
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="de-tooltip"
                        title="Deutsch"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{tooltip: classes.tooltip}}
                    >
                        <Button
                            color="transparent"
                            onClick={() =>this.handleLanguageSwitch('de')}
                            className={classes.navLink}
                        >
                            <i className={classes.socialIcons + " flag-icon flag-icon-de"}/>
                        </Button>
                    </Tooltip>
                </ListItem>
                {false &&
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="en-tooltip"
                        title="English"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{tooltip: classes.tooltip}}
                    >
                        <Button
                            color="transparent"
                            onClick={() => this.handleLanguageSwitch('en')}
                            className={classes.navLink}
                        >
                            <i className={classes.socialIcons + " flag-icon flag-icon-gb"}/>
                        </Button>
                    </Tooltip>
                </ListItem>
                }
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="cn-tooltip"
                        title="中文"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{tooltip: classes.tooltip}}
                    >
                        <Button
                            color="transparent"
                            onClick={() =>this.handleLanguageSwitch('cn')}
                            className={classes.navLink}
                        >
                            <i className={classes.socialIcons + " flag-icon flag-icon-cn"}/>
                        </Button>
                    </Tooltip>
                </ListItem>
            </List>
        );

    }
}

const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = dispatch => ({
    setLanguage: (lang) => dispatch(LanguageActions.setLanguage(lang))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    translate('common'),
    withStyles(headerLinksStyle),
)(HeaderRightLinks);
