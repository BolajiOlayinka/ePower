import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Card from './Card';



export default class App extends Component {

  constructor (){
    super();
    this.state={
      blogs:[]
    }
  }
  componentDidMount(){
    let blogsUrl= "https://epower.ng/wp-json/wp/v2/posts";
    fetch (blogsUrl)
    .then(response => response.json())
    .then(response => {
      this.setState({
        blogs:response
      })
    })
  }

  render() {
    let blogs=this.state.blogs.map(( blog, index)=>{
      
      return (
        <React.Fragment>
        <Header/>
        {/* <Body/> */}
        <Card
          cardImage={<img key={index} src={blog.excerpt.featured_image_thmbnail} alt="images"/>}
        />
        <Footer/>
        </React.Fragment>
      );
    })
   
  }




