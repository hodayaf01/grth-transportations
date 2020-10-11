import React from "react";

import './index.scss';


function Header(){

  return (
    <div>
      <ul>
        <li><a  href="/transportaionList">Transportation List</a></li>
        <li><a  href="/addTrasportaion">Add new Transportation</a></li>
        <li className="LoggedName"><a href="/">Hi {JSON.parse(localStorage.getItem('userName'))}</a></li>
      </ul>
    </div>
  );
}
export default Header;