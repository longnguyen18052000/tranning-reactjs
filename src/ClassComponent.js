import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      color: "",
      text: "click",
    };
  }
  handleClick = () => {
    alert(this.props.text);

    this.setState({
      status: !this.state.status,
    });

    if (this.state.status) {
      this.setState({
        color: this.props.color,
        text: this.props.text,
      });
    } else {
      this.setState({
        color: "",
        text: "click",
      });
    }
  };
  render() {
    return (
      <div style={{ padding: 40 }}>
        <button
          style={{
            color: this.state.color,
          }}
          onClick={this.handleClick}
        >
          {this.state.text}
        </button>
      </div>
    );
  }
}
Button.defaultProps = {
  color: "red",
  text: "Nguyễn Minh Sơn",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
