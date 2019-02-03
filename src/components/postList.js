import React from 'react'

class PostList extends React.Component{
    render(){
        const postList = this.props.postList.map(post => (
            <div key={post.id}>
                <h3>{post.title} <button style={{cursor: 'pointer'}} onClick={() => this.props.deletePost(post.id)}>X</button></h3>
            </div>
        ))

        return(
            <div>
                <h1>Post List</h1>
                {postList}
            </div>
        )
    }
}

export default PostList