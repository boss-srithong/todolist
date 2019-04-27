import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


class Header extends Component {

    render() {
        const onCreateNewItem = this.props.onCreateNewItem;
        return (
            <div>
                <h1>New List</h1>
                <Fab color="primary" aria-label="Add" onClick={onCreateNewItem} >
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

export default Header;