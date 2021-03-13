import axios from 'axios';
import React, { useEffect, useContext, useReducer } from 'react';
import { Row, Col } from 'reactstrap';
import User from './User';
import Loading from './Loading'
import ApiContext from './context/ApiContext';
import ToDos from './ToDos';
import {Reducer,Actions} from './reducers/UsersReducer';
function Users() {
    const apiContext = useContext(ApiContext);
    const baseApiUrl = apiContext.apiBaseUrl;
    const [state, dispatch] = useReducer(Reducer, {
        isLoading: true,
        toDos: [],
        users: [],
        currentUser: {},
        showToDos: false,
        toDosFilter:'All'
    });
    const loadUsers = () => {
        axios.get(`${baseApiUrl}/users`)
            .then(response => {
                dispatch({ type: Actions.ShowUsers, payload: response.data })
            }).catch(error => {
                console.error(error);
                dispatch({type:Actions.StopLoading})
            })
    }
    const loadToDos = () => {
        axios.get(`${baseApiUrl}/todos?userId=${state.currentUser.id}`)
            .then(response => {
                dispatch({ type: Actions.ShowToDos, payload: response.data });
            }).catch(err => {
                console.error(err);
                dispatch({type:Actions.StopLoading})
            })
    }
    useEffect(() => {
        dispatch({ type: Actions.LoadUsers });
        loadUsers();
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (state.currentUser.id)
            loadToDos();
        //eslint-disable-next-line
    }, [state.currentUser])
    return (
        <div>
            <h3>Users</h3>
            <hr />
            <div className="pt-1"></div>
            <Loading isLoading={state.isLoading} />
            <Row>
                {state.users.map(user => (
                    <Col lg="12" className="p-3" key={user.id}>
                        <User user={user} handleOnClick={() => dispatch({ type: Actions.LoadToDos, payload: user })} />
                    </Col>
                ))}
            </Row>
            <ToDos isVisible={state.showToDos} toDos={state.toDos} user={state.currentUser} filter={state.toDosFilter} filterChange={(newVal)=>{dispatch({type:Actions.ChangeToDoFilter,payload:newVal})}} handleClose={()=>dispatch({type:Actions.CloseToDos})}/>
        </div>
    );
}
export default Users;