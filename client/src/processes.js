import React from 'react';
import { ImageInput, Filter, List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';

const ProcessesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
        <ReferenceInput label="project role" source="project_role" reference="roles" validate={required} allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
);

export const ProcessesList = (props) => (
  <List title={"Бизнес-процессы"} {...props} /*filters={ < ProcessesFilter /> }*/>
      <Datagrid>
          <TextField source="id" />
          <TextField label="Название" source="title" />
          <TextField label="Описание" source="text" />
          <EditButton />
      </Datagrid>
  </List>
);


export const ProcessesCreate = (props) => (
  <Create title={"Добавить бизнес-процесс"} {...props}>
      <SimpleForm>
            <TextInput source="id" />
            <TextInput label="Название" source="title" />
            <LongTextInput label="Описание" source="text" />
            <TextInput label="Ссылка" source="url" />
            <ImageInput label="Иконка" />
      </SimpleForm>
  </Create>
);

const ProcessesName = ({ record }) => {
return <span>{record ? `${record.title}` : ''}</span>
};

export const ProcessesEdit = (props) => (
    <Edit {...props} title={<ProcessesName />}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput label="Название" source="title" />
            <TextInput label="Ссылка" source="url" />
            <LongTextInput label="Описание" source="text" />
            <ImageInput label="Иконка" />
      </SimpleForm>
    </Edit>
);