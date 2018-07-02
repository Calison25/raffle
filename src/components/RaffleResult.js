import React, { Component } from 'react';


class RaffleResult extends Component {
    constructor(props){
        super(props);
    }

    calculateResult() {
        const {formData} = this.props;
        const min = Math.ceil(formData.startInterval);
        const max = Math.floor(formData.endInterval);

        return Math.floor(Math.random() * (max - min) + min);
    }

    render() {
        return (
            <div>
                <h4> Resultado do sorteio</h4>
                O número sorteado foi {this.calculateResult()}
            </div>
        );
    };

}

export default RaffleResult;