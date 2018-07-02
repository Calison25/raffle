import React, { Component } from 'react';
import RaffleResult from './RaffleResult';
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

    render() {
        const inputStyle = {
              maxWidth: 80,
        };

        const formStyle = {
              maxWidth: 500
        };

        if (this.state.showResult){
           return <RaffleResult formData={this.state.formData} />;
        }

        return (
           <div style={{marginTop:50}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
               <div className="panel panel-info">
                   <div className="panel-heading">
                       <div className="panel-title">Sorteador de números aleatórios</div>
                   </div>

                   <div style={{paddingTop:30}} className="panel-body">

                        <form style={formStyle} className='form-horizontal raffle-form' id='raffleForm' onSubmit={this.handleSubmit.bind(this)}>
                            <label className='col-md-4 control-label' htmlFor=''>Primeiro número</label>
                            <div style={{marginBottom: 25}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input style={inputStyle} maxLength='4' className='form-control' type='text' value={this.state.formData.startInterval} name='startInterval' onChange={this.handleChange}/>
                            </div>

                            <label className='col-md-4 control-label' htmlFor=''>Segundo número</label>
                            <div style={{marginBottom: 25}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input style={inputStyle} maxLength='4' className='form-control' type='text' value={this.state.formData.endInterval} name='endInterval' onChange={this.handleChange}/>
                            </div>

                            <label className='col-md-4 control-label' htmlFor=''>Quantidade de sorteados</label>
                            <div style={{marginBottom: 25}} className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input style={{maxWidth: 40}} maxLength='2' className='form-control' type='text' value={this.state.formData.numberOfLots} name='numberOfLots' onChange={this.handleChange}/>
                            </div>

                            <div style={{marginLeft: 120}} className="col-md-4">
                                <button className='btn btn-info btn-block' type='submit'> Ok</button>
                            </div>
                        </form>
                   </div>
               </div>
           </div>
        );
    }
}

export default RaffleForm;