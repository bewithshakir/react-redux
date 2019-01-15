import React, {Component} from 'react';

import SongList from './SongList';
import SongDetails from './SongDetails';

class App extends Component {
    render() {
        return (
        <div className="container mt-5">
            <div className="row">
            <SongList/>
            <SongDetails/>
            </div>
        </div>
        )
    }
}
export default App;