import React, { Component } from "react";

class Search extends Component {
  state = {
    inputValue: ""
  };

  handleOnChange = event => {
    const inputValue = event.target.value;
    this.setState(() => ({ inputValue }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
  };

  render() {
    const { inputValue } = this.state;

    return (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <input
                value={inputValue}
                onChange={this.handleOnChange}
                className="form-control"
                type="text"
                placeholder="Search throught Unspash"
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
