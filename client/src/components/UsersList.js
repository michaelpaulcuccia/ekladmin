import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const UsersList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='email' />
                <EditButton basePath='/users' />
                <DeleteButton basePath='/users' />
            </Datagrid>
        </List>
    )
}

export default UsersList
