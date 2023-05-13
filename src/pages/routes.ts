import SignIn from './signIn';
type route = {
    path:string,
    title:string,
    description:string,
    requireLogin:boolean,
    Page:Function,
}
const appRoutes:Array<route> = [
    {
        path: '/',
        title: 'SignIn',
        description: 'SignIn',
        requireLogin: true,
        Page: SignIn,
    },
    {
        path: '/',
        title: 'SignIn',
        description: 'SignIn',
        requireLogin: true,
        Page: SignIn,
    },
    {
        path: '/',
        title: 'SignIn',
        description: 'SignIn',
        requireLogin: true,
        Page: SignIn,
    },
];
export default appRoutes;