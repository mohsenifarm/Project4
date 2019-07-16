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
        var posts = [];
        posts = await getAll();
        this.setState({posts});
        console.log(this.state.posts)
    }

    render(){
        return (
            this.state.posts ? 
                <div>
                 <h1>All Lost</h1>
                 <ul className={`ul-index-items`}>
                     {this.state.posts.map(
                        (post, idx) =>
                         <li key={idx} className={`li-index-items`}> 
                           <Link className={`link-indexlost`} to={`/posts/${post._id}`}>{post.title}</Link>
                         </li> 
                    )}
           
                 </ul>
            
            </div> 
            : <p>Loading...</p> 
           
        )
    }
}
export default LostIndex;