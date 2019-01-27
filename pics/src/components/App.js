import React from 'react';
import unsplash from '../api/unSplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// Access key : 9b4567840f5c66fdb9a8a2a3204ace8b43e41e2f61fc88517b2bc53c55b4c0c7
//Secret Key: d64b02a88bbdb47a5c9c2733113d64494afbe652e8ff6c920a56af3a3f9b8a9a
class App extends React.Component {
    state = {
        images: []
    };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query : term }
        });

       this.setState( { images : response.data.results } );
    }   
    
    render () {
        return (
            <div className='ui container' style={{marginTop:'10px'}}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images } />
            </div>
        );
    }
}

export default App;