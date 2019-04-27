import React, { Component } from 'react';
import ListItem from './ListItem';

class Item extends Component {

    render() {
        const lists = this.props.lists;
        const onToggleListItem = this.props.onToggleListItem;
        const onEditTask = this.props.onEditTask;
        const onDeleteTask = this.props.onDeleteTask;
        const list = lists && lists.map((list,index)=>
            <ListItem onToggleListItem={onToggleListItem} onDeleteTask={onDeleteTask} onEditTask={onEditTask} list={list} id={index} key={index}></ListItem>
        );
        return (
            <ul className="">
                {
                    list
                }
            </ul>
        )
    }
    componentDidMount() {
    }
}

export default Item;