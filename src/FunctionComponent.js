import PropTypes from "prop-types";
import { useState } from "react";

Button.defaultProps = {
  color: "red",
  text: "Nguyễn Minh Sơn",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
function Button(props) {
  const [status, setStatus] = useState(true);
  const [click, setClick] = useState({
    text: "click",
    color: "",
  });

  const handleClick = () => {
    setStatus(!status);
    alert(props.text);
    if (status) {
      setClick({
        text: props.text,
        color: props.color,
      });
    } else {
      setClick({
        text: "click",
        color: "",
      });
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <button style={{ color: `${click.color}` }} onClick={handleClick}>
        {click.text}
      </button>
    </div>
  );
}

export default Button;
