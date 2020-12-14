import React from 'react';
import { Edit, SimpleForm, TextInput, } from 'react-admin';


const IndianEdit = props => {
    return (
        <Edit title='Edit Indian' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='type' />
                <TextInput source='price' />
            </SimpleForm>
        </Edit>
    )
}

export default IndianEdit;