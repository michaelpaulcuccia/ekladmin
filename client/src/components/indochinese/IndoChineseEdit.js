import React from 'react';
import { Edit, SimpleForm, TextInput, } from 'react-admin';


const IndoChineseEdit = props => {
    return (
        <Edit title='Edit orderForm' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='type' />
                <TextInput source='price' />
            </SimpleForm>
        </Edit>
    )
}

export default IndoChineseEdit;