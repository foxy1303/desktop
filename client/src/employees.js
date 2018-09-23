import React from 'react';
import { Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, ReferenceInput, required, SelectInput, SimpleForm, TextInput } from 'admin-on-rest';
import { FunctionField, BooleanInput, BooleanField } from 'admin-on-rest';
import { ReferenceArrayInput, SelectArrayInput } from 'admin-on-rest';

const EmployeesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Поиск" source="q" alwaysOn />
        <ReferenceInput label="project role" source="project_role" reference="roles" validate={required} allowEmpty>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
);

export const EmployeesList = (props) => (
  <List title={"Сотрудники"} {...props} filters={ < EmployeesFilter /> }>
      <Datagrid>
          <TextField source="id" />
          <ReferenceField label="Проектная роль" source="project_role" reference="roles">
              <TextField source="title" />
          </ReferenceField>
          {/*<TextField source="title" />*/}
          <TextField label="ФИО" source="name" />
          <TextField label="Табельный номер" source="timesheet" />
          <TextField label="Подразделение" source="subdivision" />
          {/*<TextField source="password" />*/}
          <TextField label="Должность" source="position" />
          <FunctionField source="admin" label="Администратор" render={(record,source) => <BooleanField record={{...record,admin:!!record.admin}} source={source}/>}/>
          <TextField label="Почта" source="email" />
          {/*<TextField source="services" />*/}
          <EditButton />
      </Datagrid>
  </List>
);


export const EmployeesCreate = (props) => (
  <Create {...props} title={<span>Создание сотрудника</span>}>
      <SimpleForm>
            <TextInput label="Табельный номер" source="timesheet" />
            <ReferenceInput label="Проектная роль" source="project_role" reference="roles" validate={required} allowEmpty>
                    <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput label="ФИО" source="name" />
            <TextInput label="Должность" source="position" />
            <TextInput label="Подразделение" source="subdivision" />
            <BooleanInput label="Администратор?" source="admin" />
            <TextInput label="Почта в домене /SIGMA" source="email" />
            <TextInput label="Пароль" source="password" />
      </SimpleForm>
  </Create>
);

const EmployeesName = ({ record }) => {
return <span>Сотрудник{record ? ` ${record.name}` : ''}</span>;
}; /*title={<EmployeesName />}*/

export const EmployeesEdit = (props) => (
    <Edit {...props} title={<EmployeesName />}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="timesheet" label="Табельный номер" />
            <ReferenceInput label="Проектная роль" source="project_role" reference="roles" validate={required}>
                  <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="name" label="ФИО" />
            <TextInput source="position" label="Должность" />
            <TextInput source="subdivision" label="Подразделение" />
            <BooleanInput label="Администратор?" source="admin" />
            {/*<TextInput source="password" />*/}
            <TextInput source="email" label="Почта в домене /SIGMA" />
            {/*<TextInput label="Старый пароль" />
            <TextInput label="Новый пароль" />*/}
            {/*<TextInput source="services" />*/}
            <ReferenceArrayInput label="Дополнительные сервисы" source="services" reference="processes">
            <SelectArrayInput optionText="title" />
            </ReferenceArrayInput>
            </SimpleForm>
    </Edit>
);

export const EmployeeEdit = (props) => (
    <Edit {...props} title={<EmployeesName />}>
        <SimpleForm>
            {/*<DisabledInput source="id"/>*/}
            <DisabledInput source="timesheet" label="Табельный номер" />
            <ReferenceInput label="Проектная роль" source="project_role" reference="roles" validate={required}>
                  <SelectInput optionText="title" />
            </ReferenceInput>
            {/*<TextInput source="name" label="ФИО" />*/}
            <DisabledInput source="position" label="Должность" />
            <DisabledInput source="subdivision" label="Подразделение" />
            {/*<BooleanInput label="Администратор?" source="admin" />
            <TextInput source="password" />*/}
            <DisabledInput source="email" label="Почта в домене /SIGMA" />
            <TextInput label="Старый пароль" />
            <TextInput label="Новый пароль" />
            {/*<TextInput source="services" />*/}
            </SimpleForm>
    </Edit>
);