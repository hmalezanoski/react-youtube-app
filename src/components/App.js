import react from 'react'
import SearchBar from './SearchBar'
import VideoList from "./VideoList";

import youtube from "../api/youtube";

class App extends react.Component {

    state = {
        videos:[],
        selectedVideo:null

    }

    onTermSubmit= async (term) =>
    {
       const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })


        this.setState({videos:response.data.items})

    }

    onVideoSelect = (video) => {
            console.log(video)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videoList={this.state.videos} />
            </div>
        )
    }

}

export default App