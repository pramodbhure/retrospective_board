import React, { Component } from "react";
import { connect } from "react-redux";

class Topics extends Component {
	constructor(){
		super();
		this.state = {
			greenBar: {
				width: '50%'
			}
		}
	}
	renderTopics = () => {
		return this.props.topics.map((ele, index) => {
			return (
				<div className="row" key={index}>
					<div className="col-md-12 cols">
						<div className="col-md-8">
							{ele.name}
						</div>
						<div className="col-md-2">
							<div className="progress_bar">
								<div className="green" style={this.state.greenBar}></div>
								<div className="red"></div>
								<div className="blue"></div>
							</div>
						</div>
						<div className="col-md-2">
							<button className="btn btn-primary btn-xs">Edit</button>
							<button className="btn btn-danger btn-xs">Delete</button>
						</div>
					</div>
				</div>
			)
		});
	}

	render(){
		return (
			<div className="container topicsTable">
				<div className="row">
					<div className="col-md-12 heads">
						<div className="col-md-8">
							Topic Name
						</div>
						<div className="col-md-2">
							Score
						</div>
						<div className="col-md-2">
							Actions
						</div>
					</div>
				</div>
				{this.renderTopics()}
			</div>
		)	
	}
}

const mapStateToProps = state => {
  console.log("state:", state);
  return {
    topics: state.topics
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
)(Topics);