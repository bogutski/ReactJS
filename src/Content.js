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

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.state.editMode ? this.editButton() : this.addTodo();
    }
  };

  addTodo() {
    const todoList = this.state.todoList;
    todoList.push({
      id: this.uuidv4(),
      name: this.state.todoInput
    });

    this.setState({
      todoList,
      todoInput: '',
    });
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
    this.state.todoList.forEach(el => el.id === this.state.editedItemId ? el.name = this.state.todoInput : el.name);
    const editMode = !this.state.editMode;


    this.setState({
      todoInput: '',
      editMode
    });
  }

  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c / 4).toString(16)
    )
  }

  render() {
    return (
      <div>
        <table className="table-light m-2" width="98.5%">
          <tr>
            <td colSpan={3}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter a task description" value={this.state.todoInput}
                       onKeyPress={this._handleKeyPress}
                       onChange={(e) => this.setState({todoInput: e.target.value})}/>
                <div className="input-group-append">
                  {this.state.editMode ?
                    <button onClick={() => this.editButton()} className="btn btn-primary">Edit</button>
                    :
                    <button onClick={() => this.addTodo()} className="btn btn-primary">Add</button>
                  }
                </div>
              </div>
            </td>
          </tr>
          {this.state.todoList.length < 1 ?
            <tr>
              <td colSpan={3}>TO DO LIST IS EMPTY</td>
            </tr> :
            this.state.todoList.map(el =>
              <tr>
              <td key={el.id} width="100%" className="text-left">
                {el.name}
                </td>
                <td>
                  <button
                    onClick={() => this.editTodo(el.id)}
                    className="btn btn-secondary m-1 align-self-end"
                    disabled={this.state.editMode}>
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.removeTodo(el.id)}
                    className="btn btn-danger mt-1 mb-1 align-self-end"
                    disabled={this.state.editMode}>
                    Remove
                  </button>
                </td>
              </tr>)}
        </table>
      </div>
    );
  }
}

export default Content;