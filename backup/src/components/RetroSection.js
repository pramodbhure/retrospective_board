import React, { Component } from "react";
import { connect } from "react-redux";
import { addRetro, onHandleChange, addImprove, onImproveChange, saveImproveCard, showEditOption } from "../actions";
import {ADD_RETRO, ON_HANDLE_CHANGE} from "../actionTypes";

class RetroSection extends Component {
  constructor(){
    super();
    this.state = {
      newValue: ''
    }
  }
  handleText = (event) => {
    this.setState({
      newValue: event.target.value
    })
  }
  handleSave = (index) => {
    console.log("this.state.newValue: ", this.state.newValue)
    this.props.saveImproveCard(this.state.newValue, index)
    this.setState({
      newValue: ''
    });
  }
  renderRetroInput = () => {
    return (
      <input
        type="text"
        onKeyPress={this.props.addRetro}
        onChange={this.props.onHandleChange}
        placeholder={this.props.title}
        className="form-control"
        value={this.props.textValue}
      />
    )
  };
  renderImproveInput = () => {
    return (
      <input
        type="text"
        onKeyPress={this.props.addImprove}
        onChange={this.props.onImproveChange}
        placeholder={this.props.title}
        className="form-control"
        value={this.props.whatImproveText}
      />
    )
  };
  renderRetroCards = () => {
    return (
      this.props.cards.map((ele, index) => {
        return <div className="card" key={index}>{ele}</div>;
      })
    )
  }
  renderImproveCards = () => {
    let cards = Object.keys(this.props.improveCardsObj);
    return (
      cards.map(index => {
        const card = this.props.improveCardsObj[index];
        console.log("card: ", card);
        return <div id={index} className="card" key={index} onDoubleClick={()=>this.props.showEditOption(index)}>{card.showEdit ? <div><textarea value={this.state.newValue === '' ? card.card : this.state.newValue} onChange={this.handleText} /><input type="button" value="Save" onClick={()=>this.handleSave(index)} /></div> : <div>{card.card}</div> }</div>;
      })
    )
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 title">
            <h4><i class="fa fa-check-square-o" aria-hidden="true"></i>
 {this.props.title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.retroType === 'retro' ? this.renderRetroInput() : this.renderImproveInput()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card-row">
              {this.props.retroType === 'retro' ? this.renderRetroCards() : this.renderImproveCards() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    textValue: state.textValue,
    whatImproveText: state.whatImproveText,
    improveCardsObj: state.improveCardsObj,
    objChanged: state.objChanged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRetro: event => event.charCode === 13 ? dispatch({type: ADD_RETRO, payload: event.target.value }) : false,
    onHandleChange: event => dispatch({type: ON_HANDLE_CHANGE, payload: event.target.value }),
    addImprove: event => event.charCode === 13 ? dispatch(addImprove(event)) : false,
    onImproveChange: event => dispatch(onImproveChange(event)),
    saveImproveCard: (newValue, index) => dispatch(saveImproveCard(newValue, index)),
    showEditOption: (index) => dispatch(showEditOption(index))
  }
}

//export default RetroSection;
export default connect(mapStateToProps, mapDispatchToProps)(RetroSection)
