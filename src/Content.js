import React, { Component } from 'react';

class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
      todoList: [],
      editMode: false,
      editedItemId: ''
    };
  }

  addTodo() {
    const todoList = this.state.todoList;
    todoList.push({
      id: this.uuidv4(),
      name: this.state.todoInput
    });

    this.setState({
      todoList,
      todoInput: '',
    }, () => console.log(todoList));
  }

  removeTodo(index) {
    const todoList = this.state.todoList.filter(el => el.id !== index);

    this.setState({
      todoList,
    });
  }

  editTodo(index) {
    const todoInput = this.state.todoList.filter(el => el.id === index)[0].name;
    const editMode = !this.state.editMode;

    this.setState({
      todoInput,
      editMode,
      editedItemId: index
    });
  }

  editButton() {
    const todoList = this.state.todoList.forEach(el => el.id === this.state.editedItemId ? el.name = this.state.todoInput : el.name);
    const editMode = !this.state.editMode;


    this.setState({
      todoInput: '',
      editMode
    });
  }

  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c / 4).toString(16)
    )
  }

  render() {
    return (
      <div>

        <div className="jumbotron p-2 mb-0">
          <p className="lead">This is a simple To Do List</p>
          <hr className="my-3"/>

          <div className="container">
            <div className="row">
              <div className="col">
                <ul>
                  {this.state.todoList.map(el =>
                    <li key={el.id} className="pt-1">
                      <div className="text-md-left">{el.name}
                        <button
                          onClick={() => this.editTodo(el.id)}
                          className="btn btn-light ml-2 align-self-end"
                          disabled={this.state.editMode}>
                          Edit
                        </button>
                        <button
                          onClick={() => this.removeTodo(el.id)}
                          className="btn btn-secondary ml-2 align-self-end">
                          Remove
                        </button>
                      </div>
                    </li>)}
                </ul>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Enter a task" value={this.state.todoInput}
                         onChange={(e) => this.setState({todoInput: e.target.value})}/>
                  <div className="input-group-append">
                    {this.state.editMode ?
                      <button onClick={() => this.editButton()} className="btn btn-primary">Edit</button>
                      :
                      <button onClick={() => this.addTodo()} className="btn btn-primary">Add</button>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-3"/>
        </div>
      </div>
    );
  }
}

export default Content;