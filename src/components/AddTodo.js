import React, {Component} from 'react';
import '../App.css';

export class AddTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add to-do..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="btn-submit" />
      </form>
    );
  }
}

export default AddTodo;
