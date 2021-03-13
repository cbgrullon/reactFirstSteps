const Actions = {
    LoadPosts: 'loadPosts',
    ShowPosts: 'showPosts',
    LoadComments: 'loadComments',
    CloseComments: 'closeComments',
    ShowComments: 'showComments',
    ToggleShowComments: 'toggleShowComments',
    StopLoading: 'stopLoading'
}
function Reducer(state, action) {
    switch (action.type) {
        case Actions.LoadPosts:
            return { ...state, isLoading: true }
        case Actions.ShowPosts:
            return { ...state, isLoading: false, posts: action.payload };
        case Actions.LoadComments:
            return { ...state, isLoading: true, currentPost: action.payload };
        case Actions.ShowComments:
            return { ...state, showComments: true, isLoading: false, comments: action.payload };
        case Actions.CloseComments:
            return { ...state, showComments: false };
        case Actions.ToggleShowComments:
            return { ...state, showComments: !state.showComments };
        case Actions.StopLoading:
            return { ...state, isLoading: false };
        default:
            throw new Error('Invalid action type');
    }
}
export { Reducer, Actions }