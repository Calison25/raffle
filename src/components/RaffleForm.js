import React, { Component } from 'react';
import RaffleResult from './RaffleResult';
import '../style/RaffleForm.css';
import Error from '../consts/Error.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import RaffleErros from "./RaffleErros";

class RaffleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
               startInterval: '',
               endInterval: '',
               numberOfLots: '',
            },
            showResult: false,
            errorLevel: Error.noError,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'startInterval') {
            this.setState({formData: { ...this.state.formData, startInterval: parseInt(event.target.value)}});
        }

        if (event.target.name === 'endInterval') {
            this.setState({formData: { ...this.state.formData, endInterval: parseInt(event.target.value)}});
        }

        if (event.target.name === 'numberOfLots') {
            this.setState({formData: { ...this.state.formData, numberOfLots: parseInt(event.target.value)}});
        }
    }

    getError() {
        const {formData} = this.state;
        if ( (formData.startInterval !== '' && formData.endInterval !== '') &&
            formData.startInterval > formData.endInterval){
            return Error.invalideInterval;
        }

        return Error.noError;
    }

    handleSubmit() {
        if (this.state.formData.numberOfLots === '') {
            this.setState({formData: { ...this.state.formData, numberOfLots: 1}});
        }

        this.setState({errorLevel: this.getError()});
        this.setState({showResult: true});
    }

    hasEmptyFields() {
        const {formData} = this.state;

        if(formData.startInterval === '' || formData.endInterval === '') {
            return true;
        }

        return false;
    }

    render() {
        if (this.state.showResult) {
           return <RaffleResult formData={this.state.formData} />;
        }

        return (
           <div className='row vertical-offset-100'>
               <div className='col-md-4 col-md-offset-4'>
                    <div className='panel panel-default  panel-body--overrite'>
                        <div className="panel-heading">
                            <h3 className="panel-title">Sorteador de números aleatórios</h3>
                        </div>
                            <div className="panel-body">
                                <form className='raffle-form' name='raffleForm' id='raffleForm' onSubmit={this.handleSubmit.bind(this)}>
                                    <fieldset>
                                        <RaffleErros errorLevel={this.getError()}/>;
                                        <div className="form-group">
                                            <label className='col-md-4 control-label label-number' htmlFor=''>1º número</label>
                                            <input className='form-control input-number input-borded' maxLength='4' type='text'
                                                   value={this.state.formData.startInterval} name='startInterval' onChange={this.handleChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label className='col-md-4 control-label label-number' htmlFor=''>2º número</label>
                                            <input className='form-control input-number input-borded' maxLength='4' type='text'
                                                   value={this.state.formData.endInterval} name='endInterval' onChange={this.handleChange} required/>
                                        </div>
                                        <div className="form-group">
                                            <label className='col-md-4 control-label label-number' htmlFor=''>Sorteados</label>
                                            <input style={{maxWidth: 40}} maxLength='2' className='form-control input-borded' type='text'
                                                   value={this.state.formData.numberOfLots} name='numberOfLots' onChange={this.handleChange}/>
                                        </div>

                                        <button disabled={this.hasEmptyFields()} className="confirm-button btn btn-lg btn-success btn-block" type="submit">Ok</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
        );
    }
}

export default RaffleForm;