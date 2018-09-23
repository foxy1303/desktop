'use strict';

import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest';
import russianMessages from 'aor-language-russian';
import { RolesList, RolesEdit, RolesCreate } from './roles';
import { ProcessesList, ProcessesCreate, ProcessesEdit } from './processes';
import { AccessesList, AccessesCreate, AccessesEdit } from './accesses';
import { EmployeesList, EmployeesCreate, EmployeesEdit } from './employees';
import authClient from './authClient';
import Dashboard from './Dashboard';
import customRoutes from './customRoutes';
import createBrowserHistory from 'history/createBrowserHistory';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

const history = createBrowserHistory();
const messages = {
    'ru': russianMessages,
};

const permissions = JSON.parse(localStorage.getItem('permissions'));

const App = () => (

    <Admin dashboard={Dashboard} authClient={authClient} customRoutes={customRoutes} locale="ru" messages={messages} title="Портал SBT-Life" restClient={jsonServerRestClient('http://localhost:3000/api')} history={history}> >
        {permissions === 'admin' ?
            <Resource name="processes" options={{ label: 'Бизнес-процессы' }} list={ProcessesList} create={ProcessesCreate} edit={ProcessesEdit} remove={Delete} />
            : null}
        {permissions === 'admin' ?
            <Resource name="accesses" options={{ label: 'Доступы' }} list={AccessesList} create={AccessesCreate} edit={AccessesEdit} remove={Delete} />
            : null}
        {permissions === 'admin' ?
            <Resource name="roles" options={{ label: 'Проектные роли' }} list={RolesList} create={RolesCreate} edit={RolesEdit} remove={Delete} />
            : null}
        {permissions === 'admin' ?
            <Resource name="employees" options={{ label: 'Сотрудники' }} list={EmployeesList} create={EmployeesCreate} edit={EmployeesEdit} remove={Delete} />
            : null}
        <Resource name="employees/2" icon={SettingsIcon} options={{ label: 'Настройки' }} list={EmployeesList} edit={EmployeesEdit} />
  </Admin>

);

export default App;