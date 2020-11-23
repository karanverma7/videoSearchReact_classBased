import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'
import './App.css'


class App extends React.Component {

    state = { videos: [], selectedVideo: null }

    handleFormSubmit = async term => {
        const response = await youtube.get('/search', { params: { q: term } })
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0] 
        })
    }

    onVideoClick = video => {
        this.setState({ selectedVideo: video })
    }

    componentDidMount() {
        this.handleFormSubmit('imagine dragons')
    }
    
    render() {
        return (
            <div>
                <SearchBar onSubmit={ this.handleFormSubmit }/>
                <div className="content">
                    <VideoDetails video={ this.state.selectedVideo } /> 
                    <VideoList videos={ this.state.videos } onVideoClick={ this.onVideoClick } />
                </div>
            </div>
        )
    }
}

export default App;
