import React from 'react';
import { Create, SimpleForm, TextInput, } from 'react-admin';

const IndianCreate = props => {
    return (
        <div>
            <Create title='Indian Create New Meal' {...props}>
                <SimpleForm>
                    <TextInput source='name' />
                    <TextInput source='type' />
                    <TextInput source='price' />
                </SimpleForm>
            </Create>

        </div>
    )
}

export default IndianCreate
