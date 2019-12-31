import React, { Component } from 'react';  
import Base from './firebase';  
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
import './App.css'; 

class App extends Component {   

  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    } 

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      item: []
    })
  }

  handleDelete = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filterItems
    })
  }

  handleEdit = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);

    const selectItem = this.state.items.find(item => item.id === id);

    this.setState({
      items:filterItems,
      item: selectItem.title,
      editItem: true,
      id:id
    })
  }

  componentDidMount() {
    Base.syncState('items', {
      context: this,
      state: 'items',
      asArray: true,
      // then() {
      //   this.setState({ loading: false })
      // }
    })
  }

  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              todos
            </h3>
            <TodoInput 
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div> 
    )
  }
}

export default App;