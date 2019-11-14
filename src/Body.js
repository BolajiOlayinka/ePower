import React, { Component } from "react";
import Header from "./Header";
import renderHtml from "react-render-html";
import axios from "axios";

const style = {
  textAlign: "center",
  width: "60%",
  margin: "5em auto"
};
const img = {
  width: "100%",
  padding: "1em 0em"
};
const parag = {
  textAlign: "justify"
};

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }
  componentDidMount() {
    let blogsUrl = "https://epower.ng/wp-json/wp/v2/posts";
    fetch(blogsUrl)
      .then(response => response.json())
      .then(response => {
        this.setState({
          blogs: response
        });
      });
  }
  render() {
    let blogs = this.state.blogs.map((blog, index) => {
      return (
        <div>
          <div style={style}>
            <img
              style={img}
              key={index}
              src={blog.featured_image}
              alt="images"
            />
            <p style={parag}>{renderHtml(blog.content.rendered)}</p>
          </div>
        </div>
      );
    });

    return blogs;
  }
}
