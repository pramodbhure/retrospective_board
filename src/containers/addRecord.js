import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RetroSection from "../components/RetroSection";
import "./addRecord.css";
class addRecords extends Component {

   	
	
  render() {
console.log(">>>>> Add record is getting called!")

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 top-container">
            <h1>Add Record</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
        <div className="row">
          <div className="col-md-12 button-container">
            <Link className="btn btn-danger btn-sm" to="/">
              <i className="fa fa-plus"></i> Back to Dashboard
            </Link>
          </div>
        </div>
        <div className="cards-holder">
          <div className="col-md-12 headerDivider">
            <RetroSection title="Things that Went well!" type="positive" inputTitle="I am glad that happen!"  styleChanges={{iconClass :"fa-smile-o green" , titleClass:"green"}}>></RetroSection>
          </div>

          <div className="col-md-12 headerDivider">
            <RetroSection title="Things that should change!" type="improve"  inputTitle="I wish this should change!"  styleChanges={{iconClass :"fa-frown-o red" , titleClass:"red"}}></RetroSection>
          </div>

          <div className="col-md-12 headerDivider">         

            <RetroSection title="Plan of action!" type="todo" inputTitle="Let' schedule project training | Lets do estimation on every Monday etc.."  styleChanges={{iconClass :"fa-tasks yellow" , titleClass:"yellow"}} ></RetroSection>
          </div>
        </div>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(addRecords);
