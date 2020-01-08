import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addRetro,
  onHandleChange,
  addImprove,
  addPositive,
  addToDo,
  onImproveChange,
  onPositiveChange,
  onToDoChange,
  saveImproveCard,
  savePositiveCard,
  saveToDoCard,
  showEditOption
} from "../actions";
import { ADD_RETRO, ON_HANDLE_CHANGE } from "../actionTypes";




class RetroSection extends Component {
  constructor() {
    super();
    this.state = {
      newValue: ""
    };
  }
  handleText = event => {
    this.setState({
      newValue: event.target.value
    });
  };
  handleSave = index => {
    console.log("this.state.newValue: ", this.state.newValue);
    this.props.saveImproveCard(this.state.newValue, index);
    this.setState({
      newValue: ""
    });
  };
  renderRetroInput = () => {
    return (
      <input
        type="text"
        onKeyPress={this.props.addRetro}
        onChange={this.props.onHandleChange}
        placeholder={this.props.inputTitle}
        className="form-control"
        value={this.props.textValue}
      />
    );
  };
  renderInput = () => {
    if (this.props.type && this.props.type === "improve") {
      return (
        <input
          type="text"
          onKeyPress={this.props.addImprove}
          onChange={this.props.onImproveChange}
          placeholder={this.props.inputTitle}
          className="form-control"
          value={this.props.whatImproveText}
        />
      );
    }

    if (this.props.type && this.props.type === "positive") {
      return (
        <input
          type="text"
          onKeyPress={this.props.addPositive}
          onChange={this.props.onPositiveChange}
          placeholder={this.props.inputTitle}
          className="form-control"
          value={this.props.whatPositiveText}
        />
      );
    }

    if (this.props.type && this.props.type === "todo") {
      return (
        <input
          type="text"
          onKeyPress={this.props.addToDo}
          onChange={this.props.onToDoChange}
          placeholder={this.props.inputTitle}
          className="form-control"
          value={this.props.whatToDoText}
        />
      );
    }
  };
  renderRetroCards = () => {
    return this.props.cards.map((ele, index) => {
      return (
        <div className="card" key={index}>
          {ele}
        </div>
      );
    });
  };
  renderCards = () => {
    console.log("Improve Cards is getting called!");

    if (this.props.type && this.props.type === "improve") {
      let cards = Object.keys(this.props.improveCardsObj);
      return cards.map(index => {
        const card = this.props.improveCardsObj[index];
        console.log("card: ", card);
        return (
          <li>
             <a href="#">
          <div
            id={index}
            className="card-text-height"
            key={index}
            onDoubleClick={() => this.props.showEditOption(index)}
          >
            {card.showEdit ? (
              <div>
                <textarea
                  value={
                    this.state.newValue === "" ? card.card : this.state.newValue
                  }
                  onChange={this.handleText}
                />
                <input
                  type="button"
                  value="Save"
                  onClick={() => this.handleSave(index)}
                />
              </div>
            ) : (
              <div>{card.card}</div>
            )}
          </div>
          </a>
          </li>
        );
      });
    }

    if (this.props.type && this.props.type === "positive") {
      let cards = Object.keys(this.props.positiveCardsObj);
      return cards.map(index => {
        const card = this.props.positiveCardsObj[index];
        console.log("card: ", card);
        return (
          <li>
          <a href="#">
          <div
            id={index}
            className="card-text-height"
            key={index}
            onDoubleClick={() => this.props.showEditOption(index)}
          >
            {card.showEdit ? (
              <div>
                <textarea
                  value={
                    this.state.newValue === "" ? card.card : this.state.newValue
                  }
                  onChange={this.handleText}
                />
                <input
                  type="button"
                  value="Save"
                  onClick={() => this.handleSave(index)}
                />
              </div>
            ) : (
              <div>{card.card}</div>
            )}
          </div>
          </a></li>
        );
      });
    }
    
    if (this.props.type && this.props.type === "todo") {
      let cards = Object.keys(this.props.toDoCardsObj);
      return cards.map(index => {
        const card = this.props.toDoCardsObj[index];
        console.log("card: ", card);
        return (
          <li>
          <a href="#">
          <div
            id={index}
            className="card-text-height"
            key={index}
            onDoubleClick={() => this.props.showEditOption(index)}
          >
            {card.showEdit ? (
              <div>
                <textarea
                  value={
                    this.state.newValue === "" ? card.card : this.state.newValue
                  }
                  onChange={this.handleText}
                />
                <input
                  type="button"
                  value="Save"
                  onClick={() => this.handleSave(index)}
                />
              </div>
            ) : (
              <div>{card.card}</div>
            )}
          </div>
          </a></li>
        );
      });
    }


  };
  render() {
    var iconClass = "fa " + this.props.styleChanges.iconClass + "";
    return (
      <div>
        <div className="row">
          <div className="col-md-12 title">
            <h3>
              <i className={iconClass} aria-hidden="true"></i>
              <span className={this.props.styleChanges.titleClass}>
                {this.props.title}
              </span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.props.retroType === "retro"
              ? this.renderRetroInput()
              : this.renderInput()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="card-row">
              {this.props.retroType === "retro"
                ? this.renderRetroCards()
                : this.renderCards()}
            </ul>
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
    whatPositiveText: state.whatPositiveText,
    whatToDoText: state.whatToDoText,
    improveCardsObj: state.improveCardsObj,
    positiveCardsObj: state.positiveCardsObj,
    toDoCardsObj: state.toDoCardsObj,
    objChanged: state.objChanged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRetro: event =>
      event.charCode === 13
        ? dispatch({ type: ADD_RETRO, payload: event.target.value })
        : false,
    onHandleChange: event =>
      dispatch({ type: ON_HANDLE_CHANGE, payload: event.target.value }),
    addImprove: event =>
      event.charCode === 13 ? dispatch(addImprove(event)) : false,
    addPositive: event =>
      event.charCode === 13 ? dispatch(addPositive(event)) : false,
    addToDo: event =>
      event.charCode === 13 ? dispatch(addToDo(event)) : false,   
    onImproveChange: event => dispatch(onImproveChange(event)),
    onPositiveChange: event => dispatch(onPositiveChange(event)),
    onToDoChange: event => dispatch(onToDoChange(event)),
    saveImproveCard: (newValue, index) =>
      dispatch(saveImproveCard(newValue, index)),
    savePositiveCard: (newValue, index) =>
      dispatch(savePositiveCard(newValue, index)),
    saveToDoCard: (newValue, index) =>
      dispatch(saveToDoCard(newValue, index)),
    showEditOption: index => dispatch(showEditOption(index))
  };
};

//export default RetroSection;
export default connect(mapStateToProps, mapDispatchToProps)(RetroSection);
