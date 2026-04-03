import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import CommonLayout from "@/components/layouts/CommonLayout";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

export default Routes;
