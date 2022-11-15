import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const ButtonCRUD = ({ color, text, icon, onClick }) => {
  return (
    <button
      className="container"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {icon && (
        <FontAwesomeIcon
          color="white"
          icon={icon === "edit" ? faPen : faTrash}
        ></FontAwesomeIcon>
      )}
      {text}
    </button>
  );
}

ButtonCRUD.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonCRUD;
