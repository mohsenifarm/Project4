import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { showPost,deletePost } from '../../services/api';

class ShowPost extends Component {
    state = {
        post: []
    }  


    async componentDidMount() {
        const post = await showPost(this.props.match.params.id);
        this.setState({post});
    }
    handleDelete = (evt) => {
        console.log(" I'm Deleteing")
        console.log(this.props.match.params.id)
        deletePost(this.props.match.params.id);
        this.props.history.push('/lost');
    }
    // handleDelete(id){
    //     console.log( deletePost(id))
    // }

    render() {
        return(
            <>
                {this.state.post ? 
                    <div>
                        <p>{this.state.post.title}</p>
                        <p>{this.state.post.content}</p>
                        <br/>
                        <Link to={`/posts/${this.props.match.params.id}/edit`} className="btn btn-secondary">Edit Post</Link>

             
                        <input type='submit' value='delete'  className="btn btn-info" onClick={()=>this.handleDelete()}  />
         
                        {/* <a href="#" className="btn btn-info"  onClick={() => this.handleDelete(this.state.id, "delete")}>Delete <i className="fa fa-trash"></i> </a> */}
                    </div>
                :
                    <p>Loading...</p>
                }
            </>
        )
    }
};
export default ShowPost;