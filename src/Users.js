import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import UserMap from './UserMap'
function Users({ baseApiUrl }) {
    const [users, setUsers] = useState([]);
    const loadUsers = () => {
        axios.get(`${baseApiUrl}/users`)
            .then(response => {
                setUsers(response.data);
            }).catch(error => {
                console.error(error);
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
            <Row>
                {users.map(user => (
                    <Col lg="12" className="p-3">
                        <Card>
                            <CardHeader>
                                <h4>
                                    <strong>{user.name}</strong>
                                </h4>
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input name="username" value={user.username} readOnly />
                                </FormGroup>
                                <Row>
                                    <Col lg="6" md="6" xl="6">
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input name="email" value={user.email} readOnly />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6" md="6" xl="6">
                                        <FormGroup>
                                            <Label for="phone">Phone</Label>
                                            <Input name="phone" value={user.phone} readOnly />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <h4 className="pt-3 pb-1">Address information</h4>
                                <hr />
                                <Row>
                                    <Col lg="12" md="12" xl="12">
                                        <FormGroup>
                                            <Label for="street">Address line 1</Label>
                                            <Input name="street" value={user.address.street} readOnly />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12" md="12" xl="12">
                                        <FormGroup>
                                            <Label for="suite">Address line 2</Label>
                                            <Input name="suite" value={user.address.suite} readOnly />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" md="6" xl="6">
                                        <FormGroup>
                                            <Label for="city">City</Label>
                                            <Input name="city" value={user.address.city} readOnly />
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6" md="6" xl="6">
                                        <FormGroup>
                                            <Label for="zipcode">Zip Code</Label>
                                            <Input name="zipcode" value={user.address.zipcode} readOnly />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div>
                                    <UserMap name={user.name} lat={user.address.geo.lat} lng={user.address.geo.lng}></UserMap>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default Users;