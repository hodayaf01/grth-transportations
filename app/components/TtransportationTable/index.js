import React, { useState }  from 'react';
import PropTypes from 'prop-types';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Geocode from "react-geocode";
import GoogleMapForTransportation from '../GoogleMap';
import './transportationTable.scss';

function TransportationTable(props) {

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  function statusFormatter(row) {
    if (row)
      return "delivered";
    return "on the way";
  };

  const updatedList = [];
  Array.prototype.forEach.call(props.list, item => {
    const newItem = {
      id: item.id,
      customerId: item.customerId,
      name: item.name,
      from: `${item.fromLatitude} / ${item.fromLongitude}` ,
      to: `${item.toLatitude} / ${item.toLongitude}`,
      isArrived: item.isArrived
    }
    updatedList.push(newItem);
  })

  const handleOnSelect= (row, isSelect) => {
    if (isSelect) {
      setSelectedRow(row);
      console.log(row.from);
    }
  };

  const showAddress = () => {
    if(selectedRow!=null){
      Geocode.setApiKey("AIzaSyBp92tTnTQgEpN230RfIsFcPW73YDyC1sM");
      Geocode.setLanguage("en");
      Geocode.setRegion("es");
      Geocode.enableDebug();
      Geocode.fromLatLng(selectedRow.fromLatitude, selectedRow.fromLongitude).then(
        response => {
          const address = response.results[0].formatted_address;
          setSelectedAddress(address);
        },
        error => {
          console.error(error);
        }
      );
    }
  };

  const columns = [
    { dataField: "id", text: "Transportation Number", align: 'center' },
    { dataField: "customerId", text: "Customer Number" },
    { dataField: "name", text: "Name" },
    { dataField: "from", text: "From" },
    { dataField: "to", text: "To" },
    { dataField: "isArrived", text: "Status", formatter: statusFormatter },
  ];

  const options = {
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    sizePerPageList: [
      { text: '7', value: 7 },
      { text: '10', value: 10 },
      { text: '15', value: 15 }
    ]
  };

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: handleOnSelect,
    style: { backgroundColor: '#c8e6c9' }
  };

  return (
    <div>
      <button type='button' onClick={showAddress}>show address</button>
      {selectedAddress && <div>{selectedAddress}</div>}
      <div className="containTable" >
        <BootstrapTable
          keyField="id"
          data={updatedList}
          columns={columns}
          pagination={paginationFactory(options)}
          selectRow={ selectRow }
        />
      </div>

      <GoogleMapForTransportation/>
    </div>
  );
}

TransportationTable.propTypes = {
  list: PropTypes.array,
  text: PropTypes.object,
};


export default (TransportationTable);

