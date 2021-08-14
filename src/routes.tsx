import {RouteComponentProps, Route} from "react-router-dom"

interface Page {
    path: string;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    exact?: boolean;
}

const routes: Page[] = [
    {
        path: '/',
        component: null,
        exact: true
    },
    {
        path: '/Movies',
        component: null,
        exact: true
    },
    {
        path: '/About',
        component: null,
        exact: true,
    },
    {
        path: '/Contact',
        component: null,
        exact: true,
    }
]

const Routes = () => {
    return (
        <>
            {routes.map((route, index) => (
                <Route 
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}/>
            ))}
        </>
    )
}

export default Routes;