import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'

import PostList from "./components/postList";
import PostForm from "./components/postForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/posts?userid=${1}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          posts: res.data
        });
        console.log(`get data success : ${res.status}`);
      })
      .catch(err => console.log(err));
  }

  inputPost = post => {
    let posts = [...this.state.posts, post]
    this.setState({
      posts: posts
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            http request with axios. <br /> scrooldown to rock !!
          </p>
        </header>
        <PostForm inputPost={this.inputPost} /> <hr />
        <PostList postList={this.state.posts} />
      </div>
    );
  }
}

export default App;
