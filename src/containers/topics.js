import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRecord } from "../actions";
import NoRecordsFound from "../components/noRecordsFound";

class Topics extends Component {

	checkGreenBar(index){
		const what_went_well_count = this.props.topicState.topics[index].what_went_well.length;
		return {
			width: what_went_well_count * 10 + '%'
		}
	};
	checkRedBar(index){
		const what_improve_count = this.props.topicState.topics[index].what_improve.length;
		return {
			width: what_improve_count * 10 + '%'
		}
	};
	checkBlueBar(index){
		const sprint_action_count = this.props.topicState.topics[index].sprint_action.length;
		return {
			width: sprint_action_count * 10 + '%'
		}
	};

	renderTopics = () => {
		return this.props.topicState.topics.map((ele, index) => {
			return (
				<div className="row" key={ele.id}>
					<div className="col-md-12 cols">
						<div className="col-md-8">
							{ele.name}
						</div>
						<div className="col-md-2">
							<div className="progress_bar">
								<div className="green" style={this.checkGreenBar(index)}></div>
								<div className="red" style={this.checkRedBar(index)}></div>
								<div className="blue" style={this.checkBlueBar(index)}></div>
							</div>
						</div>
						<div className="col-md-2">
							<Link className="btn btn-primary btn-xs" to={{pathname:'/retrospective-board', state:{ind:index}}}>Edit</Link>
							<button className="btn btn-danger btn-xs" onClick={()=>{this.props.deleteRecord(index)}}>Delete</button>
						</div>
					</div>
				</div>
			)
		});
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 button-container">
						<Link className="btn btn-danger btn-sm" to="/add-record"><i className="fa fa-plus"></i> Add Record</Link>
					</div>
				</div>
				<div className="topicsTable col-md-12">
					<div className="row">
						<div className="col-md-12 heads">
							<div className="col-md-8">
								Name
							</div>
							<div className="col-md-2">
								Score
							</div>
							<div className="col-md-2">
								Actions 
							</div>
						</div>
					</div>
					{this.props.topicState.topics.length ? this.renderTopics() : <NoRecordsFound />}
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
  	deleteRecord: index => dispatch(deleteRecord(index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics);