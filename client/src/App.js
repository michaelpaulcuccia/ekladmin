import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './components/users/UsersList';
import UserEdit from './components/users/UserEdit';
import OrderFormList from './components/orderForms/OrderFormList';
import OrderFormEdit from './components/orderForms/OrderFormEdit';
import authProvider from './authProvider';

function App() {
  return (
    <Admin
      dataProvider={restProvider('https://desolate-stream-40197.herokuapp.com')}
      //dataProvider={restProvider('http://localhost:3000')}
      authProvider={authProvider}
    >
      <Resource name='admin/users' list={UsersList} edit={UserEdit} />
      <Resource name='admin/orderForms' list={OrderFormList} edit={OrderFormEdit} />
    </Admin>
  );
}

export default App;