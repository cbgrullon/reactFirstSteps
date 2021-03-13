const Actions = {
    LoadUsers: 'loadUsers',
    LoadToDos: 'loadToDos',
    ShowToDos: 'showToDos',
    ShowUsers: 'showUsers',
    CloseToDos: 'closeToDos',
    ChangeToDoFilter: 'changeToDoFilter',
    StopLoading: 'stopLoading'
}
function Reducer(state, action) {
    switch (action.type) {
        case Actions.LoadUsers:
            return { ...state, isLoading: true };
        case Actions.ShowUsers:
            return { ...state, isLoading: false, users: action.payload }
        case Actions.LoadToDos:
            let isLoading = state.currentUser.id !== action.payload.id
            return { ...state, isLoading, currentUser: action.payload };
        case Actions.ShowToDos:
            return { ...state, isLoading: false, showToDos: true, toDos: action.payload };
        case Actions.CloseToDos:
            return { ...state, showToDos: false, currentUser: {}, toDosFilter: 'All' }
        case Actions.ChangeToDoFilter:
            return { ...state, toDosFilter: action.payload }
        case Actions.StopLoading:
            return { ...state, isLoading: false };
        default:
            throw Error("Invalid action type");
    }
}
export { Reducer, Actions };