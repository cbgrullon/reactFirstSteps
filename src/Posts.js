import React,{useState,useEffect} from 'react';
import Post from './Post';
import Comments from './Comments';
import axios from 'axios'
import { Row,Col } from 'reactstrap';
function Posts({baseApiUrl}){
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    const [comments, setComments] = useState([]);
    const getPosts = () => {
        axios
          .get(`${baseApiUrl}/posts`)
          .then(async (response) => {
            setPosts(response.data)
          })
          .catch((error) => console.error(error));
      };
      const getComments = async (postId) => {
        const response = await axios.get(`${baseApiUrl}/posts/${postId}/comments`);
        setComments(response.data);
      };
      const openModal = async (post) => {
        setCurrentPost(post);
        await getComments(post.id);
        setShowModal(true);
      };
      const closeModal = () => {
        setShowModal(false);
      };
      useEffect(() => {
        if(posts.length ===0)
          getPosts();
      });
    return(
        <div>
            <h3>Posts</h3>
            <hr/>
            <Row>
                {posts.map(post=>(
                    <Col lg="12" className="p-3">
                        <Post post={post} handleClick={()=>openModal(post)}/>
                    </Col>
                ))}
            </Row>
            <Comments canShow={showModal} handleCancelClick={closeModal} comments={comments}></Comments>
        </div>
    );
}
export default Posts;