import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AddTransportationForm(props){

  const [customerId, setCustomerId] = useState(0);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const onCustomerIdChanged = (event) => {
    setCustomerId(event.target.value);
  };
  const onNameChanged = (event) => {
    setName(event.target.value);
  };
  const onAddressChanged = (event) => {
    setAddress(event.target.value);
  };
  const onFromChanged = (event) => {
    setFrom(event.target.value);
  };
  const onToChanged = (event) => {
    setTo(event.target.value);
  };

  return (
    <div>
      <form>
        <span>Transportation Number:</span> <span>{props.newId}</span><br/>
        <span>Customer Number</span> <input placeholder="Customer Number" value={customerId} onChange={onCustomerIdChanged}></input><br/>
        <span>Name</span> <input placeholder="Name" value={name} onChange={onNameChanged}></input><br/>
        <span>Address</span> <input placeholder="Address" value={address} onChange={onAddressChanged}></input><br/>
        <span>From</span> <input placeholder="From" value={from} onChange={onFromChanged}></input><br/>
        <span>To</span> <input placeholder="To" value={to} onChange={onToChanged}></input><br/>
  
        <input type="submit"></input>
      </form>
    </div>
  );
}

AddTransportationForm.prototype={
  newId: PropTypes.number,
};

export default (AddTransportationForm);