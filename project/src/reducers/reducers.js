const initialState = {
    token: '',
    tracks: [],
    tracksStatus: 'idle',
    categories: [],
    categoriesUrl: '',
    playlists: [],
    playlistsStatus: 'idle',
    search: '',
    user: null,
    myPlaylists: [],
    trackIndex: '',
    isPlaying: false,
    searchTracks: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TRACK_TRACKS_FETCED':
            return {
                ...state,
                tracksStatus: 'loading',
                searchTracks: action.payload

            }
        case 'TRACKS_FETCHED':
            return {
                ...state,
                tracks: action.payload,
                tracksStatus: 'idle',
            }
        case 'TRACKS_FETCHING_ERROR': 
            return {
                ...state,
                tracksStatus: 'error'
        }
        case 'CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'SET_CATEGORIES':
            return {
                ...state,
                categoriesUrl: action.payload
            }
        case 'PLAYLISTS_FETCHING':
                return {
                    ...state,
                    playlistsStatus: 'loading'
                }
        case 'PLSILISTS_FETCHED':
                return {
                    ...state,
                    playlists: action.payload,
                    playlistsStatus: 'idle',
                }
        case 'PLAILISTS_FETCHING_ERROR': 
                return {
                    ...state,
                    playlistsStatus: 'error'
            }
        case 'SET_CHANGED_SEARCH': {
                return {
                    ...state,
                    search: action.payload
                }
            }
        case 'SET_USER': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'SET_MY_PLAYLIST': {
            return {
                ...state,
                myPlaylists: action.playload
            }
        }
        case 'SET_TOKEN': {
            return {
                ...state,
                token: action.payload
            }
        }
        case 'SET_TRACK_INDEX': {
            return {
                ...state,
                trackIndex: action.payload
            }
        }
        case 'IS_PLAYING': {
            return {
                ...state,
                isPlaying: action.payload
            }
        }
        default:
            return state
    }
}

export default reducer;