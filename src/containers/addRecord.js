import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class addRecords extends Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 top-container">
						<h1>Add Record</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 button-container">
						<Link className="btn btn-danger btn-sm" to="/"><i className="fa fa-plus"></i> Back to Dashboard</Link>
					</div>
				</div>
			</div>
		)	
	}
}

const mapStateToProps = state => {
  return {
    topicState: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
  	//deleteRecord: index => dispatch(deleteRecord(index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addRecords);