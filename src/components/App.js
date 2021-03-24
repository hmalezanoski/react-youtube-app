import react from 'react'
import SearchBar from './SearchBar'
import youtube from "../api/youtube";

class App extends react.Component {

    onTermSubmit= async (term) =>
    {
       await youtube.get('/search',{
            params:{
                q:term
            }
        })

    }

    render() {
        return <div className="ui container"><SearchBar onFormSubmit={this.onTermSubmit} /></div>
    }

}

export default App