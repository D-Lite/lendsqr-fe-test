import React from "react";

const Popup = ({ handleDrawer }: { handleDrawer: Function }) => {
  return <div className="popup_overlay" onClick={() => handleDrawer()}></div>;
};

export default Popup;
