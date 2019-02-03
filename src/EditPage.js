import React from "react";
import PostForm from "./components/postForm";

import axios from "axios";

class EditPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        id: '',
        userId: '',
        title: '',
        body: ''
    }
  }
  
  componentWillMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.id
        }`
      )
      .then(res => {
          this.setState({
              id: res.data.id,
              userId: res.data.userId,
              title: res.data.title,
              body: res.data.body
          })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <PostForm postData={this.state} edit={1}  postType="Edit Page" />
      </div>
    );
  }
}

export default EditPage;
