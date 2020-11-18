import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './components/UsersList';
import UserEdit from './components/UserEdit';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='users' list={UsersList} edit={UserEdit} />
    </Admin>
  );
}

export default App;