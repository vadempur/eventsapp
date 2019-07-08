import React from 'react'
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Switch, Route, Redirect } from 'react-router-dom';
import BasicPage from './BasicPage';
import AccountPage from './AccountPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';

export default function SettingsDashBoard() {
    return (
        <Grid>
            <Grid.Column width={12}>'
           <Switch >
          <Redirect exact from='/settings' to='settings/basic' />     
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/account' component={AccountPage} />     
          <Route path='/settings/about' component={AboutPage} />     
          <Route path='/settings/photos' component={PhotosPage} />     
          </Switch> 

            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav/>
            </Grid.Column>

        </Grid>
    )
}
