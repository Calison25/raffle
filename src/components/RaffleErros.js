import React, { Component } from 'react';
import Error from '../consts/Error.js';
import '../style/RaffleForm.css';


class RaffleErros extends Component {
    errorMessage(){
       if (this.props.errorLevel === Error.invalideInterval){
           return <div className="error-text alert  alert-dismissible alert-danger">
                    <strong>O 1º número não pode ser maior que o 2º número</strong>
                  </div>;
       }

       return '';
    }

    render() {
        return (
            <div>
                {this.errorMessage()}
            </div>
        );
    };

}

export default RaffleErros;