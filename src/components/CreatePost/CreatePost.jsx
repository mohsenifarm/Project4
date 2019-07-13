import React, { Component } from 'react';
import { createPost } from '../../services/api';

class CreatePost extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            content: ''
        }
    }
    handleSubmit = (e) => {
        console.log('ello');
        e.preventDefault();
        createPost(this.state).then(function(){
            window.location = '/'
        })
    };
    handleTitle = (e) => {
        this.setState({title: e.target.value})
    };
    handleContent = (e) => {
        this.setState({content: e.target.value})
    }

    render(){
        return(
            <div>
                <h2>ADD ITEM</h2>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleTitle} value={this.state.title} placeholder={'Title'}  required/>
                    <br/>
                    <textarea onChange={this.handleContent} value={this.state.content} placeholder={'content of post'} required></textarea>
                    <br/>
                    <button className="btn btn-danger" >SEND POST</button>
                </form>
            </div>
        )
    }
}

export default CreatePost;