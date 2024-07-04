import {createBrowserRouter} from "react-router-dom";
import Home from "./app/page.tsx";
import Login from "./app/login/page.tsx";
import DashboardPage from "./app/admin/dashboard/page.tsx";
import ShortlinkPage from "./app/admin/shortlink/page.tsx";
import AdminLayout from "./app/admin/layout.tsx";
import ShortlinkAddPage from "./app/admin/shortlink/add_page.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin/dashboard",
                element: <DashboardPage />,
            },
            {
                path: "/admin/shortlink",
                element: <ShortlinkPage />,
                children: [
                    {
                        path: "/admin/shortlink/add",
                        element: <ShortlinkAddPage />,
                    }
                ]
            },
        ]
    }
]);