import React from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter,Row,Col,Button} from 'reactstrap';
import Comment from './Comment';
function Comments({comments,handleCancelClick, canShow,toggle}){
    let noCommentsMessage = comments.lenght ===0? (<p>This post doesn't have comments yet.</p>):null;
    return (
        <Modal isOpen={canShow}>
            <ModalHeader>
                Post comments
            </ModalHeader>
            <ModalBody>
                {noCommentsMessage}
                {comments.map(comment=>(
                    <Row>
                        <Col className="p-3">
                            <Comment comment={comment} className="p-3"/>
                        </Col>
                    </Row>
                ))}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={handleCancelClick}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    );
}
export default Comments;