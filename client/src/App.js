import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './components/UsersList';
import UserEdit from './components/UserEdit';
import OrderFormList from './components/OrderFormList';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='users' list={UsersList} edit={UserEdit} />
      <Resource name='orderForms' list={OrderFormList} />
    </Admin>
  );
}

export default App;