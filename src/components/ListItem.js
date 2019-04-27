import React, {Component} from 'react';

class ListItem extends Component {

    state = {
        value: '',
        check: false,
    }

    render() {
        const value = this.props.list.name;
        const isCompleted = this.props.list.isCompleted;
        const id = this.props.list.id;
        const onToggleListItem = this.props.onToggleListItem;
        const onDeleteTask = this.props.onDeleteTask;
        const onEditTask = this.props.onEditTask;
        return (
            <li>
                <div className="list">
                    <input checked={isCompleted}  type="checkbox" onChange={onToggleListItem} id={id}/>
                    <input value={value} onChange={onEditTask} id={id}
                        type="text" aria-label="Full name">
                    </input>
                    <button onClick={() => onDeleteTask(id)}>x</button>
                </div>
            </li>
        );
    }
}

export default ListItem;