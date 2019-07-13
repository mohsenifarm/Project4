import React, { Component } from 'react';
import { getAll } from '../../services/api';
import './LostIndex.css'

class LostIndex extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        var self = this;
        getAll().then(function(json) {
            self.setState({posts:json})
        })
    }

    render(){
        // console.log(this.state);
        var posts = this.state.posts.map((post,idx) => {
            // console.log(post)
            return (
                <li key={idx}>
                    <span className="span-lost">Title:</span>{ post.title }
                    <br/>
                    <span className="span-lost">Content:</span>{ post.content }
                </li>
            )
        });
        // console.log(posts)
        return (
            <div className="view-posts">
                <h1 className="lost-index">All Lost</h1>
                <ul>
                    {posts}
                </ul>
            </div>
        )
    }
}
export default LostIndex;