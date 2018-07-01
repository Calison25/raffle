import React, { Component } from 'react';
import RaffleForm from "./RaffleForm";

class RaffleContainer extends Component {
    render() {
        return (
           <div className="container">
               <h4>Informe o intervalo a ser sorteado</h4>
               <RaffleForm/>
           </div>
        );
    }
}

export default RaffleContainer;