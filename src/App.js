import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import  SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import youtube from './api/youtube';

export default class App extends Component {
    handleSubmit = async(searchTerm) => {
        const res = await youtube.get('search', {
            params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyDeh9H1YnPt9UQRgIP77vKS-LFVSiu3FSI',
            q: searchTerm,
        }});
        console.log(res);
    }

    render() {
        return (
            <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* <VideoList /> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

