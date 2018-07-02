import React, { Component } from 'react';
import RaffleForm from "./RaffleForm";

class RaffleContainer extends Component {
    render() {
        return (
           <div className="container">
               <RaffleForm/>
           </div>
        );
    }
}

export default RaffleContainer;