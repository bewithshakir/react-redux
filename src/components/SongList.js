import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song, i)=>{
            return(
                <div key={i} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{song.title}</span>
                    <button className="btn btn-info" onClick={(e)=> this.props.selectSong(song)}>Select</button>
                </div>
            )
        });
    }
    
    render() {
        
        return(
            <div className="col-4 list-group">{this.renderList()}</div>
        )
    }
}
const mapStateToProps = (state)=> {
    return { songs: state.songs };
}
export default connect(mapStateToProps, {selectSong})(SongList);