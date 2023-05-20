export const searchTracksFetched = (tracks) => {
    return {
        type: 'TRACK_TRACKS_FETCED',
        payload: tracks
    }
}

export const tracksFetched = (tracks) => {
    return {
        type: 'TRACKS_FETCHED',
        payload: tracks
    }
}

export const tracksErrorFetching = () => {
    return {
        type: 'TRACKS_FETCHING_ERROR',
    }
}

export const setCategories = (categories) => {
    return {
        type: 'CATEGORIES',
        payload: categories
    }
}

export const setCategoriesUrl = (categoriesUrl) => {
    return {
        type: 'SET_CATEGORIES',
        payload: categoriesUrl
    }
} 

export const plailistsFetching = () => {
    return {
        type: 'PLAYLISTS_FETCHING'
    }
}

export const plailistFetched = (plailists) => {
    return {
        type: 'PLSILISTS_FETCHED',
        payload: plailists
    }
}

export const plailistsErrorFetching = () => {
    return {
        type: 'PLAILISTS_FETCHING_ERROR',
    }
}

export const setSearch = (key) => {
    return {
        type: 'SET_CHANGED_SEARCH',
        payload: key
    }
}

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const setMyPlailist = (myPlaylists) => {
    return {
        type: 'SET_MY_PLAYLIST',
        playload: myPlaylists
    }
}

export const setTrackIndex = (trackIndex) => {
    return {
        type: 'SET_TRACK_INDEX',
        payload: trackIndex
    }
}

export const setIsPlaying = (isPlaying) => {
    return {
        type: 'IS_PLAYING',
        payload: isPlaying
    }
}

export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}