import React, { Component } from 'react';
import Header from './Header';
import renderHtml from 'react-render-html';
import axios from 'axios';


const style={
    textAlign:"center",
    width:"60%",
    margin:"5em auto",
}
const img={
width:"100%",
  padding:"1em 0em",
}
const parag={
    textAlign:"justify",
    
}


export default class Body extends Component {
    constructor (props){
        super(props);
        this.state={
            loading:false,
          blogs:[],
          error: ''
        }
      }
      componentDidMount(){
          console.log(this.props.id);
        let blogsUrl= "https://epower.ng/wp-json/wp/v2/posts";
        this.setState({loading:true}, () =>{
            axios.get(`${blogsUrl}`)
            .then(res =>{
                this.setState( {loading:false, blogs:res.data})
            })
            .catch ( error => this.setState( {loading:false, error:error.response.data}))
        })
        
      }
    render() {

        // console.log('state', this.state);
        //  const {blogs }=this.state;
        let blogs=this.state.blogs.map((blog, index)=>{
        return (
            <div>
            <Header
                headerFont="Ten Reasons Why Your Website Needs A Blog"
            />
                <div style={style}>
               <img style={img} key={index} src={blog.featured_image} alt="images"/> 
                    <div style={parag}>{ renderHtml (blog.content.rendered) }</div>
                </div>
            </div>
        );
    })
    
    return (
        [blogs[0]]
        ) 
}
}





