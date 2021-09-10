import React,{Component} from 'react'
import './Tour.scss';
 export default class Tour extends Component{
  render(){
    return(
      <article className="tour">
      <div className="img-container">
         <img
       
           src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg"
           alt=""/>
           <span className="close-btn">
           <i className="fas fa-window-close"/>
           </span>
      </div>
      <div className="tour-info">
      <h3>city</h3>
      <h4>name</h4>
      <h5>info<span>
      <i className="fas fa-caret-square-down"/>
      </span>
      </h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, debits.
      </p>

      </div>
      </article>
    )
  }
}
