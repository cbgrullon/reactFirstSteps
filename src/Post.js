import React from "react";
import './Post.css'
import { Card, CardHeader, CardBody } from "reactstrap";
function Post({post,handleClick}) {
  return (
    <Card onClick={()=> handleClick(post)} className="post-card">
      <CardHeader tag="h5">
        {post.title}
      </CardHeader>
      <CardBody>{post.body}</CardBody>
    </Card>
  );
}
export default Post;
