import react from 'react'
import SearchBar from './SearchBar'
import VideoList from "./VideoList";

import youtube from "../api/youtube";

class App extends react.Component {

    state = {videos:[]}

    onTermSubmit= async (term) =>
    {
       const response = await youtube.get('/search',{
            params:{
                q:term
            }
        })


        this.setState({videos:response.data.items})

    }

    render() {
        return (
            <div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videoList={this.state.videos} />
            </div>
        )
    }

}

export default App