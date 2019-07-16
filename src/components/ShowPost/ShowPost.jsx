import React, {Component} from 'react';
import { showPost,deletePost, addComment } from '../../services/api';
import userService from '../../utils/userService';
import './ShowPost.css'

class ShowPost extends Component {
    constructor() {
        super();
        this.state = {
          id: '',
          title: '',
          content: '',
          zipcode:'',
          comments: [],
          commentBody: '',
          userId: '',
          user: userService.getUser()
        }
      }
    
      componentDidMount = () => {
        var id = this.props.match.params.id;
        var self = this;
    
        showPost(id).then(function(post) {
          self.setState({
            id: post._id,
            title: post.title,
            content: post.content,
            zipcode: post.zipcode,
            comments: post.comments,
            userId: post.userId
          });
        })
      }
    
      handleCommentBody = (e) => {
        this.setState({ commentBody: e.target.value })
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        var self = this;
        addComment(this.state.id, this.state.commentBody).then(function(json) {
          showPost(self.state.id).then(function(post) {
            self.setState({ 
              id: post._id,
              title: post.title,
              content: post.content,
              comments: post.comments,
              zipcode: post.zipcode,
              commentBody: '',
              userId: post.userId
            });
          })
        })
      }
    
      handleDelete = (id) => {
        deletePost(id).then(function(post) {
          window.location = '/lost';
        })
      }
    
      render() {
        console.log(this.state.user._id, this.state.userId);
        var comments = this.state.comments.map((comment, idx) => {
          return (
            <li key={idx}>
              <span className={'span-li'}><em>{this.state.user.name}:</em></span>
              <span>&nbsp;&nbsp;</span>

              
              {comment.body}
            </li>
          )
        });
    
        return (
          <div className={'div-show'}>
            <h2 className={'h2-showpage'}>View Post</h2>
            <br/>
            <h4>{this.state.title}</h4>
            <p>{this.state.content}</p>
            <p>{this.state.zipcode}</p>

            { this.state.userId == this.state.user._id ?
              <>
                <a href="#" className="btn btn-danger first-a" onClick={() => this.handleDelete(this.state.id)}><i class="far fa-trash-alt"></i>&nbsp;Delete Post</a>
                <a href={`/posts/${this.state.id}/edit`} className="btn btn-info"><i class="far fa-edit"></i>&nbsp;Edit Post</a>
              </>  
            :
            null
            }
            
            <hr/>
            <br/>
            <ul>
              { 
                comments
              }
            </ul>
            <br/>

            <form onSubmit={this.handleSubmit}>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comment...' onChange={this.handleCommentBody} value={this.state.commentBody} required={true}></textarea>
              <br/>
              <button className='btn btn-success'><i class="fas fa-plus"></i>Add Comment</button>
            </form>
          </div>
        )
      }
    }
export default ShowPost;
