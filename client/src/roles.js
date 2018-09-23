import React from 'react';
import { NumberInput, List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput } from 'admin-on-rest';

export const RolesList = (props) => (
  
  <List title={"Проектные роли"} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Название" source="title" />
      <EditButton label=""/>
    </Datagrid>
  </List>

);

export const RolesCreate = (props) => (
  <Create title={"Создать проектную роль"} {...props}>
      <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="title" label="Название проектной роли" />
      </SimpleForm>
  </Create>
);

export const RolesEdit = (props) => (
  <Edit title={"Изменить проектную роль"} {...props}>
      <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" label="Название проектной роли" />
      </SimpleForm>
  </Edit>
);