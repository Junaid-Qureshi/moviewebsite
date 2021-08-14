import {RouteComponentProps, Route} from "react-router-dom"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";

interface Page {
    path: string;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    exact?: boolean;
}

const routes: Page[] = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/Movies',
        component: Movies,
        exact: true
    },
    {
        path: '/About',
        component: About,
        exact: true,
    },
    {
        path: '/Contact',
        component: Contact,
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