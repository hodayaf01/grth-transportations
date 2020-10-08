import React from 'react';
import PropTypes from 'prop-types';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import GoogleMap from '../GoogleMap';

function TransportationTable(props) {

  function statusFormatter(row) {
    if (row)
      return "done";
    return "on the way";
  };

  const handleOnSelect= (row, isSelect) => {
    if (isSelect) {
      console.log(row.fromLatitude);
    }
  };

  const columns = [
    { dataField: "id", text: "Transportation Number", align: 'center' },
    { dataField: "customerId", text: "Customer Number" },
    { dataField: "name", text: "Name" },
    { dataField: "address", text: "Address" },
    { dataField: "fromLatitude", text: "From" },
    { dataField: "fromLongitude", text: "" },
    { dataField: "toLatitude", text: "To" },
    { dataField: "toLongitude", text: "" },
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
      { text: '5', value: 5 },
      { text: '7', value: 7 },
      { text: '10', value: 10 },
      { text: '15', value: 15 },
      { text: 'All', value: props.list.length }
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
      <BootstrapTable
        keyField="id"
        data={props.list}
        columns={columns}
        pagination={paginationFactory(options)}
        selectRow={ selectRow }
      />
      <GoogleMap/>
    </div>
  );
}

TransportationTable.propTypes = {
  list: PropTypes.array,
  text: PropTypes.object,
};


export default (TransportationTable);

