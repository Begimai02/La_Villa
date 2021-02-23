import React, {Component} from 'react';
import axios from 'axios';
import Posts from '../Pagination/Posts';
export class Pagination extends Component {
    state = {
        posts: [],
        loading: false,
        currentPae: 1,
        poostPerPage: 5
    };
    componentDidMount(){
        const getPosts = async () => {
            this.setState({ loading: true});
            const resulys = await axios.get('http://localhost:8000/villas')
            this.setState({ posts: results.data})
            this.setState({ loading: false})
        }
        getPosts();
    }
    render() {
        const {currentPage, postsPerPage, posts, loading} = this.state;

        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfLastPost = indexOfLastPost - postsPerPage;
        const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


        return(
            <div className="container">
                <h1 className="my-5 text-primary text-center">React Pagination</h1>
                <Posts posts={currentPosts} loading={loading}/>

            </div>
        )
    }
}



export default Pagination;