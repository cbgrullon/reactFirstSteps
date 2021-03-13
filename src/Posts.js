import React, { useEffect, useContext, useReducer } from 'react';
import Post from './Post';
import Comments from './Comments';
import axios from 'axios'
import { Row, Col } from 'reactstrap';
import Loading from './Loading';
import ApiContext from './context/ApiContext';
import { Reducer, Actions } from './reducers/PostsReducer';
function Posts() {
  const apiContext = useContext(ApiContext);
  const baseApiUrl = apiContext.apiBaseUrl;
  const [state, dispatch] = useReducer(Reducer, {
    isLoading: true,
    showComments: false,
    comments: [],
    posts: [],
    currentPost: {}
  });
  const getPosts = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then(async (response) => {
        dispatch({ type: Actions.ShowPosts, payload: response.data });
      })
      .catch((error) => {
        console.error(error)
        dispatch({ type: Actions.StopLoading })
      });
  };
  const getComments = () => {
    axios.get(`${baseApiUrl}/posts/${state.currentPost.id}/comments`)
      .then(response => {
        dispatch({ type: Actions.ShowComments, payload: response.data });
      })
      .catch(err=>{
        console.error(err);
        dispatch({type:Actions.StopLoading})
      });
  };
  useEffect(() => {
    getPosts();
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (state.currentPost.id)
      getComments();
    //eslint-disable-next-line
  }, [state.currentPost])
  return (
    <div>
      <h3>Posts</h3>
      <hr />
      <div className="pt-1"></div>
      <Loading isLoading={state.isLoading} />
      <Row>
        {state.posts.map(post => (
          <Col lg="12" className="p-3">
            <Post post={post} handleClick={() => dispatch({ type: Actions.LoadComments, payload: post })} />
          </Col>
        ))}
      </Row>
      <Comments canShow={state.showComments} handleCancelClick={() => { dispatch({ type: Actions.CloseComments }) }} comments={state.comments}></Comments>
    </div>
  );
}
export default Posts;