import React, { Component } from 'react';

class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
      todoList: []
    };
  }

  addTodo() {
    const todoList = this.state.todoList;
    todoList.push(this.state.todoInput);

    this.setState({
      todoList,
      todoInput: '',
    });
  }

  render() {
    return (
      <div>

        <div className="jumbotron p-2 mb-0">
          <p className="lead">This is a simple To Do List</p>
          <hr className="my-3" />

        <div className="container">
          <div className="row">
            <div className="col">
              <ul>
                {this.state.todoList.map(el => <li key={el}>{el}</li>)}
              </ul>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter a task" value={this.state.todoInput}
                       onChange={(e) => this.setState({todoInput: e.target.value})}/>
                <div className="input-group-append">
                  <button onClick={() => this.addTodo()} className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          <hr className="my-3" />
        </div>
      </div>
    );
  }
}

export default Content;