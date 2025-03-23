import App from '../App'
import ErrorPage from '../pages/ErrorPage.jsx'
import Shop from '../pages/Shop.jsx'
const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/shop',
        element: <Shop/>,
        errorElement: <ErrorPage/>
    }
]

export default routes