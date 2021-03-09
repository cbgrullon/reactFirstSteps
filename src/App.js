import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Card, CardBody, CardHeader, CardTitle, Row, Col,Button } from 'reactstrap';

function App() {
  const baseUrl = `https://jsonplaceholder.typicode.com`;
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState({});
  const [comments,setComments] = useState([]);
  const getPosts = () => {
    axios.get(`${baseUrl}/posts`)
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  };
  const getComments = async (postId)=>{
    const response = await axios.get(`${baseUrl}/comments?postId=${postId}`)
    setComments(response.data);
  }
  const openModal = async (post) => {
    setCurrentPost(post);
    await getComments(currentPost.id);
    setShowModal(true);
  }
  const closeModal=()=>{
    setShowModal(false);
  };
  useEffect(() => getPosts());
  return (
    <div className="app">
      <Row>
        {data.map(post=>(
          <Col lg="4" className="pb-3">
            <Card onClick={openModal.bind(this,post)} >
              <CardHeader>
                <CardTitle>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardBody>
                {post.body}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
     <Modal isOpen={showModal}>
       <ModalHeader>
          Comentarios
       </ModalHeader>
       <ModalBody>
         <Row>
           {comments.map(comment=>(
             <Col lg="12" className="pb-3">
               <Card>
                 <CardHeader>
                   <CardTitle>
                     {comment.name}
                   </CardTitle>
                 </CardHeader>
                 <CardBody>
                   {comment.body}
                 </CardBody>
               </Card>
             </Col>
           ))}
         </Row>
       </ModalBody>
       <ModalFooter>
         <Button color="secondary" onClick={closeModal}>Cancelar</Button>
       </ModalFooter>
     </Modal>
    </div >
  );
}

export default App;
