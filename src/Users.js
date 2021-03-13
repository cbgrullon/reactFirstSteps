import axios from 'axios';
import React, { useEffect, useContext, useReducer } from 'react';
import { Row, Col } from 'reactstrap';
import User from './User';
import Loading from './Loading'
import ApiContext from './context/ApiContext';
import ToDos from './ToDos';
function Users() {
    const apiContext = useContext(ApiContext);
    const baseApiUrl = apiContext.apiBaseUrl;
    const loadUsers = () => {
        axios.get(`${baseApiUrl}/users`)
            .then(response => {
                dispatch({ type: 'showUsers', payload: response.data })
            }).catch(error => {
                console.error(error);
            })
    }
    const loadToDos = () => {
        axios.get(`${baseApiUrl}/todos?userId=${state.currentUser.id}`)
            .then(response => {
                console.log(response.data)
                dispatch({ type: "showToDos", payload: response.data });
            }).catch(err => {
                console.error(err);
            })
    }
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "loadToDos":
                let isLoading = state.currentUser.id !== action.payload.id
                return { ...state, isLoading, currentUser: action.payload };
            case "showToDos":
                return { ...state, isLoading: false, showToDos: true, toDos: action.payload };
            case "loadUsers":
                return { ...state, isLoading: true };
            case "showUsers":
                return { ...state, isLoading: false, users: action.payload }
            case "closeToDos":
                return {...state,showToDos:false,currentUser:{}}
            case "changeToDoFilter":
                return {...state,toDosFilter:action.payload}
            default:
                throw Error("Invalid action type");
        }
    }, {
        isLoading: false,
        toDos: [],
        users: [],
        currentUser: {},
        showToDos: false,
        toDosFilter:'All'
    })
    useEffect(() => {
        console.log('load users');
        dispatch({ type: 'loadUsers' });
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
                        <User user={user} handleOnClick={() => dispatch({ type: 'loadToDos', payload: user })} />
                    </Col>
                ))}
            </Row>
            <ToDos isVisible={state.showToDos} toDos={state.toDos} user={state.currentUser} filter={state.toDosFilter} filterChange={(newVal)=>{dispatch({type:'changeToDoFilter',payload:newVal})}} handleClose={()=>dispatch({type:'closeToDos'})}/>
        </div>
    );
}
export default Users;