import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const IndoChineseList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='type' />
                <EditButton basePath='/admin/indochinese' />
                <DeleteButton basePath='/admin/indochinese' />
            </Datagrid>
        </List>
    )
}

export default IndoChineseList