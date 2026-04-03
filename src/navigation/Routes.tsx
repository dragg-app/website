import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import CommonLayout from "@/components/layouts/CommonLayout";
import Tools from "@/pages/Tools";
import TestimonialsAndFAQ from "@/pages/TestimonialsAndFAQ";
import NotFoundPageCompact from "@/components/shared/NotFoundPageCompact";

const Routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFoundPageCompact />,
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/tools',
                element: <Tools />,
            },
            {
                path: '/testimonials',
                element: <TestimonialsAndFAQ />,
            },
            // {
            //     path: '/contact',
            //     element: <ContactPage />,
            // },
        ],
    },
]);

export default Routes;
