import React, { Component } from 'react';
import RaffleResult from './RaffleResult';
import '../style/RaffleForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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

    disableSumitButton() {
        const {formData} = this.state;

        if(formData.startInterval === '' || formData.endInterval === '') {
            return true;
        }

        return false;
    }

    render() {
        if (this.state.showResult){
           return <RaffleResult formData={this.state.formData} />;
        }

        return (
           <div className='row vertical-offset-100'>
               <div className='col-md-4 col-md-offset-4'>
                    <div className='panel panel-default'>
                        <div className="panel-heading">
                            <h3 className="panel-title">Sorteador de números aleatórios</h3>
                        </div>
                            <div className="panel-body">
                                <form name='raffleForm' id='raffleForm' onSubmit={this.handleSubmit.bind(this)}>
                                    <fieldset>
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

                                        <button disabled={this.disableSumitButton()} className="btn btn-lg btn-success btn-block" type="submit">Ok</button>
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