import React, { Component } from 'react';
import Header from './Header';
// import Card from './Card';
import './Card.css'
import {Link} from 'react-router-dom';
import axios from 'axios'


export default class CardList extends Component {
    constructor (props){
        super(props);
        this.state={
            loading:false,
          blogs:[],
          error: ''
        }
      }
      componentDidMount(){
        let blogsUrl= "https://epower.ng/wp-json/wp/v2/posts";
        this.setState({loading:true}, () =>{
            axios.get(`${blogsUrl}`)
            .then(res =>{
                this.setState( {loading:false, blogs:res.data})
            })
            .catch ( error => this.setState( {loading:false,}))
        })
        
      }
    
      render() {
          console.log(this.state);
          const {blogs } =this.state;
       
          return (
              <div>
              <Header 
                  headerFont="E-Power"
              />
              <div className="container">
              <div className="row">
            {/* {blogs.length ? ( */}

             
            {blogs.map( blog =>  (
                <div className="col-12 col-md-6 col-lg-4">
                <div className="card">
                <Link to = {`/blog/${blog.id}`} >
                <img src={blog.featured_image_thumbnail} alt="images"/>
            </Link>
            
             <div className="card-title">
                <h4>{blog.title.rendered}</h4>
                <p>{blog.excerpt.rendered}</p>
              </div>
            </div>
            </div>
            ))}
            {/* ) : " "} */}
          </div>
          
         
          </div>
          <div className="btnContainer">
              <button className="btn">
                  Previous
              </button>
              <button className="btn">
                Next
              </button>
            </div>
          </div>
          )
            }
        }
        
        
          

