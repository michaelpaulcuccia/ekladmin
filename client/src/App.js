import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './components/users/UsersList';
import UserEdit from './components/users/UserEdit';
import OrderFormList from './components/orderForms/OrderFormList';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='admin/users' list={UsersList} edit={UserEdit} />
      <Resource name='admin/orderForms' list={OrderFormList} />
    </Admin>
  );
}

export default App;