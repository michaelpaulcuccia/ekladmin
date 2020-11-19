import React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

const OrderFormList = props => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='._id' />
                <TextField source='name' />
                <TextField source='phone' />
                <EmailField source='email' />
                <TextField source='address' />
                <TextField source='deliveryaddress' />
                <TextField source='numberofguests' />
                <TextField source='deliverydateandtime' />
                <TextField source='options' />
                <TextField source='dietaryrestrictions' />
                <TextField source='allergies' />
                <EditButton basePath='/orderForms' />
                <DeleteButton basePath='/orderForms' />
            </Datagrid>
        </List>
    )
}

export default OrderFormList
