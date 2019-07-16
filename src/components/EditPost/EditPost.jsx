import React, { Component } from 'react';
import { editPost, showPost } from '../../services/api';


class EditPost extends Component{
    state={
        id:'',
        title:'',
        content:'',
        zipcode:''
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var self = this;
        showPost(id).then(function(post) {
            self.setState({ id: post._id,       
                            title: post.title, 
                            content: post.content
                        })
          })
    }

    handleSubmit = (e) => {
        var self = this;
        e.preventDefault();
        editPost(this.state).then(function(json){
            window.location = `/posts/${self.state.id}`
        });
    };
    handleTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    handlecontent = (e) => {
        this.setState({ content: e.target.value })
    }
    handleZip = (e) => {
        this.setState({zipcode: e.target.value})
    }

    render(){
        return(
            <>
            <h1>Edit Post</h1>
            <hr/>
          <form onSubmit={this.handleSubmit}>
            <label>Post Title : </label>
            <br/>
            <input class="form-control" onChange={this.handleTitle} value={this.state.title} />
            <br/>

            <label>Post content : </label>
            <br/>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handlecontent} value={this.state.content}></textarea>
            <br/>
            <br/>
            <input class="form-control" onChange={this.handleZip} value={this.state.zipcode} />
            <br/>
            
            <input type="submit" className="btn btn-primary" value="Submit Post" />
          </form>
            </>
        )
    }
}
export default EditPost;