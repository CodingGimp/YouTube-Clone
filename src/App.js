import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import YouTube from './api/youtube'

export default class App extends Component {
    render() {
        return (
            <Grid justify='center' container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                        {/* SEARCH BAR */}
                        </Grid>
                        <Grid item xs={8}>
                        {/* VIDEO DETAILS */}
                        </Grid>
                        <Grid item xs={4}>
                        {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
