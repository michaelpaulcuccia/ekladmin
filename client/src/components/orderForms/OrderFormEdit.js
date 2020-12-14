import React from 'react';
import { Edit, SimpleForm, TextInput, } from 'react-admin';


const OrderFormEdit = props => {
    return (
        <Edit title='Edit orderForm' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='phone' />
                <TextInput source='email' />
                <TextInput source='address' />
                <TextInput source='deliveryaddress' />
                <TextInput source='numberofguests' />
                <TextInput source='deliverydateandtime' />
                <TextInput source='options' />
                <TextInput source='dietaryrestrictions' />
                <TextInput source='allergies' />
            </SimpleForm>
        </Edit>
    )
}

export default OrderFormEdit;
