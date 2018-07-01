import React, { Component } from 'react';
import ConfirmButton from "./ConfirmButton";

class RaffleForm extends Component {
    render() {
        return (
           <div>
                <form className="raffleForm" id="raffleForm">
                    <label htmlFor="">
                        Primeiro número: <input type="text" name="startInterval"/>
                    </label>

                    <label htmlFor="">
                        Segundo número: <input type="text" name="endInterval"/>
                    </label>

                    <label htmlFor="">
                        Quantidade de sorteados: <input type="text" name="numberOfLots"/>
                    </label>
                    
                    <ConfirmButton/>
                </form>
           </div>
        );
    }
}

export default RaffleForm;