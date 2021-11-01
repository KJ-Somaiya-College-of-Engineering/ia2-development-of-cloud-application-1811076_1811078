import React from "react";

function Header(props) {
  const handleOnClick = () => props.setIsModalVisible(true);
  
  return (
    <header style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <h2 id="app-header">Notes On Cloud</h2>
      <button className="logoutButton"  onClick={handleOnClick}>Logout</button>
    </header>
  );
}

export default Header;