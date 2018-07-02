import React, { Component } from 'react';


class RaffleResult extends Component {
    constructor(props){
        super(props);
        console.log('chega aqui1');
    }

    render() {
        return (
            <div>
                <h4> Resultado do sorteio</h4>
                Aqui o resultado!
            </div>
        );
    };

}

export default RaffleResult;