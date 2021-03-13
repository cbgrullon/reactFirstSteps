import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Button, FormGroup, Input, Label } from 'reactstrap';
import ShowIf from './ShowIf';
function ToDos({ toDos, isVisible, user, handleClose, filterChange, filter }) {
    return (
        <Modal isOpen={isVisible}>
            <ModalHeader>
                To Do list for: {user.name}
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="filter">Filter</Label>
                    <Input type="select" name="filter" onChange={(e) => { filterChange(e.target.value) }}>
                        <option value="All">All</option>
                        <option value="true">Completed only</option>
                        <option value="false">Uncompleted only</option>
                    </Input>
                </FormGroup>
                <ListGroup>
                    {toDos.map(toDo => (
                        <>
                            <ShowIf isVisible={filter === 'All' || filter === toDo.completed.toString()}>
                                <ListGroupItem color={toDo.completed ? 'success' : 'light'} title={toDo.completed ? 'Completed' : 'Not completed'}>
                                    {toDo.title}
                                </ListGroupItem>
                            </ShowIf>
                        </>
                    ))}
                </ListGroup>
            </ModalBody>
            <ModalFooter>
                <Button color={'secondary'} onClick={handleClose}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ToDos;