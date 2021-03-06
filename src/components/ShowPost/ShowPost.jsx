import React, {Component} from 'react';
import { showPost,deletePost, addComment } from '../../services/api';
import CreateComment from '../CreateComment/CreateComment'
import userService from '../../utils/userService';
import './ShowPost.css'

class ShowPost extends Component {
    constructor() {
        super();
        this.state = {
          userId: userService.getUser().name,
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
          console.log('pooooooooost', post)
          self.setState({
            id: post._id,
            title: post.title,
            content: post.content,
            zipcode: post.zipcode,
            comments: post.comments,
            userId: post.userId._id,
            name: post.userId.name
          });
        })
      }
    
      handleCommentBody = (e) => {
        this.setState({ commentBody: e.target.value })
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        // var self = this;
        addComment(this.state.id, this.state.commentBody)
        // .then(function(json) {
        //   console.log('helloooooooooooooooooooooooo')
        //   alert('hi')
          // showPost(self.state.id).then(function(post) {
            
          //   self.setState({ 
          //     id: post._id,
          //     title: post.title,
          //     content: post.content,
          //     comments: post.comments,
          //     zipcode: post.zipcode,
          //     commentBody: '',
          //     userId: post.userId,
          //     name:post.userId.name


          //   })
            
          // })

        // })
        console.log('hi im here')
      }
    
      handleDelete = (id) => {
        deletePost(id).then(function(post) {
          window.location = '/lost';
        })
      }
    
      render() {
        console.log(this.state);
        // console.log('username',this.state.userName)
        // console.log('userid',this.state.userId.name)
        var comments = this.state.comments.map((comment, idx) => {
          return (
            <li key={idx}>
              
              <span className={'span'}>{comment.userId.name}</span> :&nbsp;
              {comment.body}
              <hr/>
            </li>
          )
        });
    
        return (
          <div className={'div-show'}>
            <h2 className={'h2-showpage'}>View Post</h2>
            <br/>
            <h3>{this.state.title}</h3>
            <p className={'p-showpost'}>{this.state.content}</p>
            <p className={'p2-showpost'}>ZipCode:{this.state.zipcode}</p>

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
            <div className={'divshow-post'}>
            <ul>
              { 
                comments
              }
            </ul>
            </div>
            <CreateComment id={this.props.match.params.id}/>
          </div>
        )
      }
    }
export default ShowPost;
