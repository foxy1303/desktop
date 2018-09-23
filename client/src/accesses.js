import React from 'react';
import { NumberInput, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, ReferenceInput, required, SelectInput, SimpleForm } from 'admin-on-rest';

export const AccessesList = (props) => (
  
  <List title={"Доступы"} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField label="Проектная роль" source="id_project_role" reference="roles">
          <TextField source="title" />
      </ReferenceField>
      <ReferenceField label="Бизнес-процесс" source="id_bp" reference="processes">
          <TextField source="title" />
      </ReferenceField>
      <EditButton label=""/>
    </Datagrid>
  </List>

);

export const AccessesCreate = (props) => (
  <Create title={"Предоставить доступ"} {...props}>
      <SimpleForm>
            <NumberInput source="id" />
            <ReferenceInput label="Проектная роль" source="id_project_role" reference="roles" validate={required} allowEmpty>
                    <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Бизнес-процесс" source="id_bp" reference="processes" validate={required} allowEmpty>
                    <SelectInput optionText="title" />
            </ReferenceInput>
      </SimpleForm>
  </Create>
);

export const AccessesEdit = (props) => (
  <Edit title={"Изменить доступ"} {...props}>
      <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Проектная роль" source="id_project_role" reference="roles" validate={required} allowEmpty>
                    <SelectInput optionText="title" />
            </ReferenceInput>
            <ReferenceInput label="Бизнес-процесс" source="id_bp" reference="processes" validate={required} allowEmpty>
                    <SelectInput optionText="title" />
            </ReferenceInput>
      </SimpleForm>
  </Edit>
);