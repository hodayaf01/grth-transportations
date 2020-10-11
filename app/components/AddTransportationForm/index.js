import { func } from 'prop-types';
import React from 'react';
import Geocode from "react-geocode";
import './index.scss';

class AddTransportationForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customerId: '',
      name: '',
      fromlat: '',
      fromlng: '',
      tolat: '',
      tolng: '',
      from: '',
      to:'',
    }
  }

  render(){
    const {newId, submitAddNewTransportation} = this.props;

    const onCustomerIdChanged = (event) => this.setState({customerId:event.target.value }) 
    const onNameChanged = (event) => this.setState({name: event.target.value})
    const onFromChanged = (event) => this.setState({from: event.target.value})
    const onToChanged = (event) => this.setState({to: event.target.value})

    const onSubmitAddForm = () => {

      getAddress(this.state.from, 'from');
      getAddress(this.state.to, 'to');

      const tempTrans = {
        customerId: this.state.customerId,
        name: this.state.name,
        fromlat: this.state.fromlat,
        fromlng: this.state.fromlng,
        tolat: this.state.tolat,
        tolng: this.state.tolng
      };
      submitAddNewTransportation(tempTrans);
    };


    const getAddress = (address, type) => {
      Geocode.setApiKey("AIzaSyBp92tTnTQgEpN230RfIsFcPW73YDyC1sM");
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        response => {
          if(response.status === 'OK'){
            const { lat, lng } = response.results[0].geometry.location;
            if(type === 'from') {this.setState({fromlat: lat}); this.setState({fromlng: lng})}
            else {this.setState({tolat: lat}); this.setState({tolng: lng})}
          }
        },
        error => {
          console.error(error);
        }
      );    
    };

    return(
      <div>
        <form>
          <p>Transportation Number:</p> <span>{newId}</span><br/>
          <p>Customer Number</p> <input placeholder="Customer Number" value={this.state.customerId} onChange={onCustomerIdChanged}></input><br/>
          <p>Name</p> <input placeholder="Name" value={this.state.name} onChange={onNameChanged}></input><br/>
          <p>From</p> <input placeholder="From" value={this.state.from} onChange={onFromChanged}></input><br/>
          <p>To</p> <input placeholder="To" value={this.state.to} onChange={onToChanged}></input><br/>
          <button className="submitButton" type='button' onClick={onSubmitAddForm}>submit</button>
        </form>
      </div>
    );
  }

}
export default AddTransportationForm;