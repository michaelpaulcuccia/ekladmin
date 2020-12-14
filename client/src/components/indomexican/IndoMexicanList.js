import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const IndoMexicanList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='type' />
                <EditButton basePath='/admin/indomexican' />
                <DeleteButton basePath='/admin/indomexican' />
            </Datagrid>
        </List>
    )
}

export default IndoMexicanList