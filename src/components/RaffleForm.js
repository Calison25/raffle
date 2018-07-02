import React, { Component } from 'react';
import RaffleResult from "./RaffleResult";

class RaffleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
               startInterval: '',
               endInterval: '',
               numberOfLots: '',
            },
            showResult: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.name === 'startInterval') {
            this.setState({formData: { ...this.state.formData, startInterval: event.target.value}});
        }

        if(event.target.name === 'endInterval') {
            this.setState({formData: { ...this.state.formData, endInterval: event.target.value}});
        }

        if(event.target.name === 'numberOfLots') {
            this.setState({formData: { ...this.state.formData, numberOfLots: event.target.value}});
        }
    }

    handleSubmit() {
        this.setState({showResult: true});
    }

    render() {
        if (this.state.showResult){
           return <RaffleResult formData={this.state.formData} />;
        }

        return (
           <div>
                <form className="raffle-form" id="raffleForm" onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="">
                        Primeiro número: <input type="text" value={this.state.formData.startInterval} name="startInterval" onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="">
                        Segundo número: <input type="text" value={this.state.formData.endInterval} name="endInterval" onChange={this.handleChange}/>
                    </label>

                    <label htmlFor="">
                        Quantidade de sorteados: <input type="text" value={this.state.formData.numberOfLots} name="numberOfLots" onChange={this.handleChange}/>
                    </label>

                    <input type="submit" value="Ok"/>
                </form>
           </div>
        );
    }
}

export default RaffleForm;