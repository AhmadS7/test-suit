import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import JsonServerProvider from 'ra-data-json-server';
import UserList from './users.js';
import { PostCreate, PostEdit, PostList } from './posts.js';
// icon
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import dashboard from './dashboard.js';
import authProvider from './authProvider.js';

const dataProvider = JsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  return (
    <Admin dashboard={dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      {/* <Resource name="posts" list={ListGuesser} /> */}
      <Resource name="posts" list={PostList} edit={PostEdit} icon={PostIcon} create={PostCreate} />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  );
};

export default App;
