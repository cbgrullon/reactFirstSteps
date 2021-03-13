import React from "react";
import './User.css'
import {Card,CardHeader,CardBody,FormGroup,Row,Col,Label,Input} from 'reactstrap';
function User({user,handleOnClick}) {
  return (
    <div>
      <Card className="userCard" onClick={handleOnClick}>
        <CardHeader tag="h5">{user.name}</CardHeader>
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
          <h5 className="pt-3 pb-1">Address information</h5>
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
        </CardBody>
      </Card>
    </div>
  );
}
export default User;
