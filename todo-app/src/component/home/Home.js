import React, { Component } from 'react';
import Toolbar from '../modal/Toolbar';


import './Home.css';



class Home extends Component {
  render() {
 
    return (
        <div className = "welcome">
          <div className="col-lg-40 m-auto">
             <Toolbar style={{marginBottom:'20px', width: '100%'}}/>
             </div>
         <h1 style={{textAlign: 'center', marginTop: '150px', color:'#fff'}}>THINGS  TO  DO</h1>
          <h4 style={{ textAlign: 'center', marginTop:'5px', color: '#fff'}}>1. OWN TODAY</h4>
     </div>

    );

    
  };
}


export default Home;