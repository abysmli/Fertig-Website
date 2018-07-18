import React from "react";
import {translate} from 'react-i18next';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

// @material-ui/icons

class ContactSection extends React.Component {
  render() {
      const {classes, t} = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
              <h2 className={classes.title}>{t('contact_title')}</h2>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                      labelText={t('contact_your_name')}
                      id="name"
                      formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                      labelText={t('contact_your_email')}
                      id="email"
                      formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                    labelText={t('contact_your_message')}
                    id="message"
                    formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                    inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                      <Button color="primary">{t('contact_send_message')}</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default translate('common')(withStyles(workStyle)(ContactSection));
