import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import UsersList from './components/users/UsersList';
import UserEdit from './components/users/UserEdit';
import OrderFormList from './components/orderForms/OrderFormList';
import OrderFormEdit from './components/orderForms/OrderFormEdit';
//MENUS
import IndianList from './components/indian/IndianList';
//import IndianCreate from './components/indian/IndianCreate';
import IndianEdit from './components/indian/IndianEdit';
import IndoChineseList from './components/indochinese/IndoChineseList';
import IndoChineseEdit from './components/indochinese/IndoChineseEdit';
import IndoEuropeanList from './components/indoeuropean/IndoEuropeanList';
import IndoEuropeanEdit from './components/indoeuropean/IndoEuropeanEdit';
import IndoMexicanList from './components/indomexican/IndoMexicanList';
import IndoMexicanEdit from './components/indomexican/IndoMexicanEdit';
import MiddleEasternList from './components/middleeastern/MiddleEasternList';
import MiddleEasternEdit from './components/middleeastern/MiddleEasternEdit';
import SSSList from './components/soupssandwichessalads/SSSList';
import SSSEdit from './components/soupssandwichessalads/SSSEdit';
import authProvider from './authProvider';

function App() {
  return (
    <Admin
      //PROD
      dataProvider={restProvider('https://desolate-stream-40197.herokuapp.com')}
      //DEV
      //dataProvider={restProvider('http://localhost:3000')}
      authProvider={authProvider}
    >
      <Resource name='admin/users' list={UsersList} edit={UserEdit} />
      <Resource name='admin/orderForms' list={OrderFormList} edit={OrderFormEdit} />
      <Resource name='admin/indian' list={IndianList} edit={IndianEdit}
      // create={IndianCreate} 
      />
      <Resource name='admin/indochinese' list={IndoChineseList} edit={IndoChineseEdit} />
      <Resource name='admin/indoeuropean' list={IndoEuropeanList} edit={IndoEuropeanEdit} />
      <Resource name='admin/indomexican' list={IndoMexicanList} edit={IndoMexicanEdit} />
      <Resource name='admin/middleeastern' list={MiddleEasternList} edit={MiddleEasternEdit} />
      <Resource name='admin/soupssandwichessalads' list={SSSList} edit={SSSEdit} />
    </Admin>
  );
}

export default App;