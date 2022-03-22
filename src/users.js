import * as React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';

export default function UserList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        {/* <TextField source="username" /> */}
        <TextField source="email" />
        {/* <TextField source="address.street" /> */}
        <TextField source="phone" />
        <TextField source="website" />
        {/* <UrlField source="website" /> */}
        <MyUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
}
