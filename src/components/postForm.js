import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  componentWillReceiveProps(props) {
    if (props.edit) {
      this.setState({
        title: props.postData.title,
        body: props.postData.body
      });
    }
  }

  inputOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  inputOnSubmit = event => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: this.state.title,
        body: this.state.body,
        userId: 1
      })
      .then(res => {
        
        alert(`post data to API success : ${res.status}`);
        this.props.inputPost(res.data);
      })
      .catch(err => console.log(err));
  };

  updateOnSubmit = event => {
    event.preventDefault();

    let data = {
      title: this.state.title,
      body: this.state.body,
      userId: this.props.postData.userId
    };
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.id
        }`,
        data
      )
      .then(res => {
        alert(`put data to API success; '${res.status}`);
        // actually, return must be list from database
        // and callback set to state post list
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>{this.props.postType}</h1>
        <form
          onSubmit={this.props.edit ? this.updateOnSubmit : this.inputOnSubmit}
        >
          <input
            onChange={this.inputOnChange}
            defaultValue={this.state.title}
            style={{ width: "100%" }}
            type="text"
            name="title"
            placeholder="title"
          />{" "}
          <br /> <br />
          <textarea
            onChange={this.inputOnChange}
            value={this.state.body}
            style={{ width: "100%", height: "50px" }}
            name="body"
            placeholder="body"
          />{" "}
          <br /> <br />
          <button type="submit">{this.props.edit ? "Update" : "Submit"}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(PostForm);
