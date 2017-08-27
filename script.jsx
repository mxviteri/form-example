'use strict';

class ReactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    }

    this.submit = this.submit.bind(this);
  }

  render() {
    if (!this.state.submitted) {
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
    } else {
      return (<h3>Thanks for your submission!</h3>);
    }
  }

  submit() {
    this.setState((state) => {
      return state.submitted = true;
    });
  }
}

ReactDOM.render(<ReactForm />, document.getElementById('container'));
