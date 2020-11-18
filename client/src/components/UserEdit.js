import React from 'react';
import { Edit, SimpleForm, TextField, EmailField } from 'react-admin';

const UserEdit = props => {
    return (
        <Edit title='Edit User' {...props}>

            <SimpleForm>
                <TextField disabled source='id' />
                <TextField source='name' />
                <EmailField source='email' />
                <TextField source='password' />
            </SimpleForm>

        </Edit>
    )
}

export default UserEdit
