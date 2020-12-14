import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const MiddleEastern = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='type' />
                <EditButton basePath='/admin/middleeastern' />
                <DeleteButton basePath='/admin/middleeastern' />
            </Datagrid>
        </List>
    )
}

export default MiddleEastern