import React, { Component } from 'react';
import RaffleForm from "./RaffleForm";


class RaffleResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: this.calculateResult(),
            back: false
        };
    }

    calculateResult() {
        const {formData} = this.props;
        const min = Math.ceil(formData.startInterval);
        const max = Math.floor(formData.endInterval);

        return Math.floor(Math.random() * (max - min) + min);
    }

    handleRetry() {
        this.setState({result: this.calculateResult()});
    }

    render() {
        if (this.state.back) {
            return <RaffleForm/>
        }

        return (
            <div>
                <div className="card text-white bg-success mb-3" style={{maxWidth: "50rem", maxHeight: "50rem"}}>
                    <div className="card-header">
                        <h3>Resultado</h3>
                    </div>
                    <div className="card-body">
                        <h5>
                            <p className="card-text">O número sorteado foi {this.state.result}.</p>
                        </h5>
                    </div>
                </div>

                <button onClick={this.handleRetry.bind(this)} className="btn btn-lg btn-primary btn-block">Sortear novamente</button>
                <button onClick={() => this.setState({back: true})} className="btn btn-lg btn-secondary btn-block">Voltar</button>
            </div>
        );
    };

}

export default RaffleResult;