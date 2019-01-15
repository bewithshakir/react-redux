import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song})=> {
    if (!song) {
        return <h3 className="col-4 details">Please select a song</h3>
    }
    return(
        <div className="col-4 details">
            <h3>Song Details</h3>
            <p>Title:  {song.title}</p>
            <p>Duration:  {song.duration}</p>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return { song: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetails);