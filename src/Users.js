import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Row, Col } from 'reactstrap';
import Constants from './Constants';
import User from './User';
import Loading from './Loading'
function Users() {
    const baseApiUrl = Constants.baseApiUrl;
    const [users, setUsers] = useState([]);
    
    const [isLoading,setIsLoading] = useState(true)
    const loadUsers = () => {
        axios.get(`${baseApiUrl}/users`)
            .then(response => {
                setUsers(response.data);
                setIsLoading(false)
            }).catch(error => {
                console.error(error);
                setIsLoading(false)
            })
    }
    useEffect(() => {
        if (users.length === 0)
            loadUsers();
    })
    return (
        <div>
            <h3>Users</h3>
            <hr />
            <div className="pt-1"></div>
            <Loading isLoading={isLoading}/>
            <Row>
                {users.map(user => (
                    <Col lg="12" className="p-3">
                        <User user={user}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default Users;