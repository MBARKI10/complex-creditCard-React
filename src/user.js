import React, { Component} from 'react';
import './user.css';

class HelloUser extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        keyword1:'',
        keyword:'',
        keyword2:''
      }
    }
     
    //Name of Card Owner
    nameChange = (event) => {
         this.setState({keyword1: event.target.value})
      this.props.tapeName(event.target.value)
    }
     
    //Number of Card Owner
    numberChange = (event) => {
        this.setState({keyword: event.target.value})
        this.props.tapeNumber(event.target.value)
      }
      //Month of Card Owner 
      handelchange3 = (event) => {

        this.setState({keyword2:event.target.value})
 
        this.props.tapeValidThru(event.target.value)
 
    }


    render() {
        return ( 
       <div className="callout margin-top50">
         <label>NAME
           <input type="text" className="use-title" onChange={this.nameChange} placeholder="Your Name"/><br/>
         
         </label>
         <label>NUMBER
            <input type="text" className="use-number" onChange={this.numberChange} placeholder="Your RIP"/><br/>
         </label>
         <label>Date
           <input type='text' className="use-date" onChange={this.handelchange3}  placeholder="Date Exp" />  
           </label>
         </div>);
         
    }
}
    
export default HelloUser;