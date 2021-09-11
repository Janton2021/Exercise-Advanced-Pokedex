import ListPokemos from 'pages/ListPokemos'
import Details from 'pages/Details'

export default [
    {
        path: '/',
        component: ListPokemos,
        exact: true,
    },
    {
        path: '/details/:name',
        component: Details,
        exact: true,
    }
]