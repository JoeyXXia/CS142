import React from "react";
import "./States.css";

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
    };
    console.log(this.state.stringList);
  }

  render() {
    return (
      <div className="list-container">
        <ul>
          {this.state.stringList.map((list, id) => {
            return <li key={id}>{list}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default States;
