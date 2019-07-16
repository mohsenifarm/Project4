import React, { Component } from 'react';
import { showPost,addComment } from '../../services/api';
import userService from '../../utils/userService'

class CreateComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 'hello',
            comment: {
                body: '',
                userId: userService.getUser()._id
            }
        }
    }
    componentDidMount(){
        this.setState({
            id:this.props.id,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var self = this;
        addComment(this.state.id, this.state.comment).then(function(json) {
        //   showPost(self.state.id).then(function(post) {
            self.setState({ 
            //   id: post._id,
              body: self.state.body

            });
        //   })
        }).then(function(mo){
            window.location = `/posts/${self.props.id}`
        })
      }
      handleCommentBody = (e) => {
          console.log('============>',this.state.id)
          console.log(e.target.value)
          var val = e.target.value;
        this.setState(preState => {
            let comment = {...preState.comment};
            comment.body = val;
            return {
                comment
            }
        })
      }
    
    render(){
        
        return(
            <div>

                <form onSubmit={this.handleSubmit}>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comment...' onChange={this.handleCommentBody}>
                    </textarea>
                    <br/>
                    <button className='btn btn-success'><i class="fas fa-plus"></i>Add Comment</button>
                </form>
            </div>
        )
    }
}
export default CreateComment;