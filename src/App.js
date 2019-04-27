import React, { Component } from 'react';
import List from './components/List'
import Header from './components/Header'
import CompletedSection from './components/CompletedSection'
import './App.css';


class App extends Component {
  state  = {
    lists: [
      {
        name: 'list 1',
        isCompleted: true,
      },  {
        name: 'list 2',
        isCompleted: false,
      },  {
        name: 'list 3',
        isCompleted: false,
      },  {
        name: 'list 4',
        isCompleted: true,
      },  {
        name: 'list 5',
        isCompleted: true,
      },
    ],
    showCompletedList: true,
  };

  onToggleCompletedList = () => {
    //this.setState({showCompletedList : !this.state.showCompletedList})
    this.setState(({showCompletedList}) => ({showCompletedList: !showCompletedList}))
  };

  onCreateNewItem = () => {
    // const newList =
    //     {
    //       name: '',
    //       isCompleted: false,
    //     }
    // this.setState({lists : [...this.state.lists, newList]});
    // this.setSteate(({list,lastId}) => ({
    //     list: [...list, {id:lastId}]
    //     lastId: lastId +1,
    //   })
    // )
  };

  onToggleListItem = (event) => {
    const target = event.target;
    const value = target.checked;
    const id = target.id;
    const lists = this.state.lists;
    lists[id].isCompleted = value;
    this.setState({ lists: lists })
  };

  onEditTask = (event) => {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    const lists = this.state.lists;
    lists[id].name = value;
    this.setState({ lists: lists })
  };

  onDeleteTask = (id) => {
    const lists = this.state.lists;
    lists.splice(id,1);
    this.setState({ lists: lists })
  };

  render() {
    this.state.lists.forEach( (list, index ) => { list.id = index});
    const lists = this.state.lists;
    const inCompletedList =  lists.filter( list =>  !list.isCompleted)
    const completedList = lists.filter( list =>  list.isCompleted);
    return (
      
        <div className="App">
          <div className="container">
            <Header onCreateNewItem={this.onCreateNewItem}/>
            <CompletedSection onToggleListItem={this.onToggleListItem} onDeleteTask={this.onDeleteTask} onToggleCompletedList={this.onToggleCompletedList} onEditTask={this.onEditTask} lists={completedList} showCompletedList={this.state.showCompletedList}/>
            <List onToggleListItem={this.onToggleListItem}  onDeleteTask={this.onDeleteTask} onEditTask={this.onEditTask} lists={inCompletedList}/>
          </div>
        </div>
    );
  }
}

export default App;