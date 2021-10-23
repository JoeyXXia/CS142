import React from "react";
import "./States.css";
import Header from "../header/Header";
import { Fragment } from "react";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );
    this.state = {
      stringList: window.cs142models.statesModel(),
      inputValue:'',
    };
    console.log(this.state.stringList);
  }

  handleInput(event){
      this.setState({inputValue:event.target.value})
  }


  render() {
    return (
      <Fragment>
      <Header/>
      <div className="list-container">
        <ul>
          <label htmlFor="search">search for</label>
          <input type="text"  id="search" value={this.state.inputValue} onChange={this.handleInput.bind(this)}/>
          <p>{this.state.inputValue}</p>
          {this.state.stringList.filter((list) => {
            return list.toLowerCase().includes(this.state.inputValue.toLowerCase())
          })
                                .map((list, id) => {
            return <li key={id}>{list}</li>;
          })}
        </ul>
      </div>
      </Fragment>
    );
  }
}

export default States;
