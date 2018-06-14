import React, { Component } from 'react';

class RaffleForm extends Component {
    render() {
        return (
           <div className="raffleForm">
               <form action="">
                   <label>Número 1</label>
                   <input type="text"/>
                   <label>Número 2</label>
                   <input type="text"/>
               </form>
           </div>
        );
    }
}

export default RaffleForm;