import React, { Component } from 'react';
import List from './List';
import Button from '@material-ui/core/Button';

class CompletedSection extends Component {

    render() {
        const lists = this.props.lists;
        const onToggleCompletedList = this.props.onToggleCompletedList;
        const onToggleListItem = this.props.onToggleListItem;
        const onDeleteTask = this.props.onDeleteTask;
        const onEditTask = this.props.onEditTask;
        const showCompletedList = this.props.showCompletedList;
        let list = '';
        if(showCompletedList) {
            list = <List onToggleListItem={onToggleListItem} onDeleteTask={onDeleteTask} onEditTask={onEditTask} lists={lists}/>
        }

        return (
            <div>
                <div>
                    <span>{lists.length} Completed</span>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={onToggleCompletedList}>{showCompletedList? 'Hide' : 'Show'} 
                    </Button>
                </div>
                <div>
                    <ul>
                        {
                            list
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default CompletedSection;