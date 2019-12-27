import React, { Component } from "react";
import RetroSection from "../components/RetroSection";
import { connect } from "react-redux";
// import { TOGGLE_SHOW_HIDE } from "../actionTypes";
import {toggleShowHide} from "../actions";

class Board extends Component {
  renderSections = () => {
    return (
      <div
        className="col-md-12"
        style={{ display: this.props.showSections ? "block" : "none" }}
      >
        <div className="col-md-4">
          <RetroSection retroType="retro" title="What went well?" />
        </div>
        <div className="col-md-4">
          <RetroSection retroType="" title="What can be improved?" />
        </div>
        <div className="col-md-4">
          <RetroSection retroType="" title="Next steps" />
        </div>
      </div>
    );
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <button
            onClick={() => this.props.toggleShow(!this.props.showSections)}
          >
            Toggle showHideSection
          </button>
        </div>
        <div className="row Retro-section">{this.renderSections()}</div>
      </div>
    );
  }
}
// export default Board;

const mapStateToProps = state => {
  console.log("state:", state.showSections);
  return {
    showSections: state.showSections
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleShow: showOrHide => dispatch(toggleShowHide(showOrHide))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
