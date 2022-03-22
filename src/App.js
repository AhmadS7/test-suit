import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import JsonServerProvider from 'ra-data-json-server';
import UserList from './users.js';
import { PostCreate, PostEdit, PostList } from './posts.js';

const dataProvider = JsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name="posts" list={ListGuesser} /> */}
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="users" list={UserList} />
    </Admin>
  );
};

export default App;
