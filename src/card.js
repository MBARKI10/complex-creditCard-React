
import React, { Component } from 'react';
import puce from './Puce.jpg';
import master from './master.png';
import word from './word.jpg'
 
import "./card.css";

class Card extends Component{
  render(){
    const {news,news2,news1}=this.props
    console.log(news)
     console.log(news2)
     console.log(news1)
    return ( 
//       <div className='carte'>
//       <div className="use-image">
//       <img src={word} className="word" alt="logo" />
//       </div>
// <div className="title">

//     <h1>Company Name</h1>
//   </div>
//         <img src={puce} className="puce" alt="logo" />
//         <div className="rip">
//             <h3>{news}</h3>
//         </div>
    
<div className="row">
  <div className="small-5 small-offset-1 columns ">
  
    <div className="callout credit">
   
      <div className="row">
        <div className="small-6 columns">
          <h1 className="credit__bank">{news1}</h1>
        </div>
        
        
      </div>
      <div className="row">
        <div className="small-9 columns">
          <label>
            <h2 className="credit__name">{news2}</h2>
          </label>
        </div>
        <div className="small-6 columns">
          <img className="master" src={master}  alt="" />
        </div>
        <div className="small-6-columns">
          <img className="puce" src={puce}  alt="" />
        </div>
        <div className="small-3 columns">
          <label>
            <h2 className="credit__date">{news}</h2>
          </label>
        </div>
       
       
      </div>

    </div>
  </div>
  {/* <div className="flex">
    <p>{news}</p>
  
    <p>{news2}</p>
    <p>{news1}</p>
    {/* <img src={visa} className="master" alt="logo" /> */}
    {/* </div> */} 
  </div>
     )
  }
}





export default Card;

