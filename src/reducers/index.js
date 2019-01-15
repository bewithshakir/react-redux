import { combineReducers } from 'redux';

const songsReducer = ()=> {
    return [
        {title: 'No subs', duration: '4.05'},
        {title: 'Macarena', duration: '2.05'},
        {title: 'All Start', duration: '3.15'},
        {title: 'I want it that way', duration: '1:45'}
    ];
}

const selectedSongReducer = (selectedSong = null, action)=> {
    if (action.type === 'SONG_SELECTION') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});