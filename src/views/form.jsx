'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

module.exports = class ReactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
        <label htmlFor="name">Age:</label>
        <input type="text" name="age" />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <button className="btn btn-primary" type="submit" onClick={this.submit}>Submit</button>
      </form>
    );
  }
}
