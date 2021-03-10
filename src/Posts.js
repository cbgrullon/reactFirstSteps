import React,{useState,useEffect} from 'react';
import Post from './Post';
import Comments from './Comments';
import axios from 'axios'
import { Row,Col } from 'reactstrap';
import Constants from './Constants';
import Loading from './Loading';
import ShowIf from './ShowIf';
function Posts(){
    const baseApiUrl = Constants.baseApiUrl;
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [comments, setComments] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const getPosts = () => {
        axios
          .get(`${baseApiUrl}/posts`)
          .then(async (response) => {
            setPosts(response.data)
            setIsLoading(false)
          })
          .catch((error) =>{
            console.error(error)
            setIsLoading(false)
          });
      };
      const getComments = async (postId) => {
        const response = await axios.get(`${baseApiUrl}/posts/${postId}/comments`);
        setComments(response.data);
        setIsLoading(false)
      };
      const openModal = async (post) => {
        setIsLoading(true);
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
            <div className="pt-1"></div>
            <Loading isLoading={isLoading}/>
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