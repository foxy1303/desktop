import React from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources } from 'admin-on-rest';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';

const Menu = ({ resources, onMenuTap, logout }) => (
    <div>
        <MenuItemLink to="/" icon={DashboardIcon} primaryText="Главная" onClick={onMenuTap} />
        <MenuItemLink to="/settings" primaryText="Настройки" onClick={onMenuTap} />
        {localStorage.getItem('admin') === 'admin' ? (<MenuItemLink to="/employees" primaryText="Сотрудники" onClick={onMenuTap} />) : (false)}
        {localStorage.getItem('admin') === 'admin' ? (<MenuItemLink to="/processes" primaryText="Бизнес-процессы" onClick={onMenuTap} />) : (false)}
        {localStorage.getItem('admin') === 'admin' ? (<MenuItemLink to="/accesses" primaryText="Доступы" onClick={onMenuTap} />) : (false)}
        {localStorage.getItem('admin') === 'admin' ? (<MenuItemLink to="/roles" primaryText="Проектные роли" onClick={onMenuTap} />) : (false)}
        {logout}
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
})
export default connect(mapStateToProps)(Menu);