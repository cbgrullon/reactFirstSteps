import React from 'react';
import {Card,CardBody,CardHeader,CardTitle} from 'reactstrap';
function Comment({comment}){
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    <strong>
                    {comment.name}
                    </strong>
                </CardTitle>
            </CardHeader>
            <CardBody>
                <p>
                    {comment.body}
                </p>
            </CardBody>
        </Card>
    );
}
export default Comment;