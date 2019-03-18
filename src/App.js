import React, { Component } from 'react';
import Card from './card';
import HelloUser from './user';
import './App.css';



const newstab=[]
class App extends Component {
 constructor(props){

   super(props)

     this.state={

      ripstr:'',

      rip:'**** **** **** ****',

      holderName:'FOULEN',

      validThru:'**/**'

     }

   }

     renderCardNumber(keyword){

       keyword = keyword.toString()

       return   this.setState({ rip:keyword.slice(0,4) + ' ' +  keyword.slice(4,8) + ' ' +  keyword.slice(8,12) + ' ' +  keyword.slice(12)})



     
}

     renderName(keyword1){
       return this.setState({ holderName:keyword1.toLocaleUpperCase() })

     }



     renderValidThru(keyword2){

    keyword2 = keyword2.toString()
    return this.setState ({validThru: keyword2.slice(0, 2) + '/' + keyword2.slice(2)})
     }
  render() {
    return (

      <div className="App">
       <Card  
              news={this.state.holderName}
              news2={this.state.rip}
              news1={this.state.validThru}
          />
           
 
        <HelloUser tapeName={(keyword1)=>this.renderName(keyword1)}
 
                   tapeNumber={(keyword)=>this.renderCardNumber(keyword)}
                   tapeValidThru={(keyword2)=>this.renderValidThru(keyword2)}
                 />
                                
              
 
      </div>
 
    );
  }
}

export default App;
