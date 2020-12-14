import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const IndoEuropeanList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='type' />
                <EditButton basePath='/admin/indoeuropean' />
                <DeleteButton basePath='/admin/indoeuropean' />
            </Datagrid>
        </List>
    )
}

export default IndoEuropeanList;