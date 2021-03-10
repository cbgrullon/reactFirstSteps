import React from "react";
import './Post.css'
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
function Post({post,handleClick}) {
  return (
    <Card onClick={()=> handleClick(post)} className="post-card">
      <CardHeader>
        <CardTitle><strong>{post.title}</strong></CardTitle>
      </CardHeader>
      <CardBody>{post.body}</CardBody>
    </Card>
  );
}
export default Post;
