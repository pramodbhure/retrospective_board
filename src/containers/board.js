import React, { Component } from "react";
import { connect } from "react-redux";
// import { TOGGLE_SHOW_HIDE } from "../actionTypes";

class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          This is Board component
        </div>
      </div>
    );
  }
}
// export default Board;

const mapStateToProps = state => {
  return {
    //showSections: state.showSections
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //toggleShow: showOrHide => dispatch(toggleShowHide(showOrHide))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
