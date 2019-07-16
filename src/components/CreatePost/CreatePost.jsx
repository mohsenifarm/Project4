import React, { Component } from 'react';
import { createPost } from '../../services/api';
import './CreatePost.css'

class CreatePost extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            content: '',
            zipcode: 0
        }
    }
    handleSubmit = (e) => {
        console.log('ello');
        e.preventDefault();
        createPost(this.state).then(function(){
            window.location = '/lost'
        })
    };
    handleTitle = (e) => {
        this.setState({title: e.target.value})
    };
    handleContent = (e) => {
        this.setState({content: e.target.value})
    }
    handlZipcode = (e) => {
        this.setState({zipcode: e.target.value})
    }

    render(){
        return(
            <div>
                <h2>ADD ITEM</h2>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <input class="form-control" onChange={this.handleTitle} value={this.state.title} placeholder={'Title'}  required/>
                    <br/>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleContent} value={this.state.content} placeholder={'content of post'} required></textarea>
                    <br/>
                    <input class="form-control" onChange={this.handlZipcode} placeholder='Zip Code...' />
                    <br/>
                    <button className="btn btn-danger" ><i class="fas fa-share-alt"></i>&nbsp;SEND POST</button>
                </form>
            </div>
        )
    }
}

export default CreatePost;