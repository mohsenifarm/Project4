import React, { Component } from 'react';
import { getAll } from '../../services/api';
import { Link } from 'react-router-dom'


import './LostIndex.css'

class LostIndex extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        }
    }
    async componentDidMount() {
        // var self = this;
        // getAll().then(function(json) {
        //     self.setState({posts:json})
        // })
        var posts = [];
        posts = await getAll();
        this.setState({posts});
        console.log(this.state.posts)
    }

    render(){
        console.log(this.state.posts);
   
        // console.log(posts)
        return (
            this.state.posts ? 
                <div>
                 <h1>All Lost</h1>
                 <ul>
                     {this.state.posts.map(
                        (post, idx) =>
                         <li key={idx}> 
                           <Link to={`/posts/${post._id}`}>{post.title}</Link>
                         </li> 
                    )}
           
                 </ul>
            
            </div> 
            : <p>Loading...</p> 
           
        )
    }
}
export default LostIndex;