import Header from './components/Header.vue';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    }, 'user')
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'))
    }, 'user')
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'))
    }, 'user')
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'))
    }, 'user')
};
const NewUser = resolve => {
    require.ensure(['./components/user/NewUser.vue'], () => {
        resolve(require('./components/user/NewUser.vue'))
    }, 'user')
};

export const routes = [
    {path : '', name: '/userList', components:{
        default: UserStart,
        'header-bottom': Header
    } }, 
    {path: '/new', component: NewUser , name: 'newUser' },
    {path : '/userList', components:{
        default: UserStart,
        'header-bottom': Header
    }, children: [
        {path: ':id', component: UserDetail},
        {
            path: ':id/edit',
            component: UserEdit,
            name: 'userEdit'
        },
    ] },
    { path: '/redirect-me', redirect:{name:'userEdit'} },
    { path: '*', redirect: '/'}

];