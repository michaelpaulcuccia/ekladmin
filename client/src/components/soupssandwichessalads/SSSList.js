import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const SSSList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='type' />
                <EditButton basePath='/admin/soupssandwichessalads' />
                <DeleteButton basePath='/admin/soupssandwichessalads' />
            </Datagrid>
        </List>
    )
}

export default SSSList