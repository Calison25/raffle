import React, { Component } from 'react';
import RaffleResult from "./RaffleResult";

class RaffleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startInterval: '',
            endInterval: '',
            numberOfLots: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.name === 'startInterval') {
            this.setState({startInterval: event.target.value});
        }

        if(event.target.name === 'endInterval') {
            this.setState({endInterval: event.target.value});
        }

        if(event.target.name === 'numberOfLots') {
            this.setState({numberOfLots: event.target.value});
        }
    }

    handleSubmit(event) {
        this.setState({redirect: true});
    }

    render() {
        // if (this.state.redirect){
        //    return  <Redirect push to="/RaffleResult"/>
        // }

        return (
           <div>
                <form className="raffle-form" id="raffleForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        Primeiro número: <input type="text" value={this.state.startInterval} name="startInterval" onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="">
                        Segundo número: <input type="text" value={this.state.endInterval} name="endInterval" onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="">
                        Quantidade de sorteados: <input type="text" value={this.state.numberOfLots} name="numberOfLots" onChange={this.handleChange}/>
                    </label>

                    <input type="submit" value="Ok" />
                </form>
           </div>
        );
    }
}

export default RaffleForm;