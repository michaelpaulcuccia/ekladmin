import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const IndianList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='type' />
                <EditButton basePath='/admin/indian' />
                <DeleteButton basePath='/admin/indian' />
            </Datagrid>
        </List>
    )
}

export default IndianList