import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'admin-on-rest';


export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        localStorage.setItem('username', username);
        console.log('залогинились');
        const url = `http://localhost:5000/login`;
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify({
                email: username,
                password: password
            })
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error("Неверный логин или пароль");
                }
                response = response.json();
                return response;
            })
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                let permissions = user.admin === 1 ? 'admin' : 'user';
                localStorage.setItem('permissions', permissions);
            }).catch(e => {
                console.log(e);
            });
            
    }
    
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('user');
        localStorage.removeItem('permissions');
        localStorage.removeItem('services');
        console.log('вышли');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        const { resource } = params;
        if (resource === 'posts') {
            // check credentials for the posts resource
        }
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        return Promise.resolve(localStorage.getItem('permissions'));
    }
    return Promise.reject('Unknown method');
};

