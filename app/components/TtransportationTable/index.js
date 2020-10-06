import React from 'react';
import PropTypes from 'prop-types';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import * as ReactBootStrap from 'react-bootstrap';


function TransportationTable(props) {

  function statusFormatter(row) {
    if (row)
      return "done";
    return "on the way";
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
  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={props.list}
        columns={columns}
        pagination={paginationFactory(options)}
      />
    </div>
  );
}

TransportationTable.propTypes = {
  list: PropTypes.array,
};


export default (TransportationTable);