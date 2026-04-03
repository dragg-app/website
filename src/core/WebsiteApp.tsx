import { RouterProvider } from "react-router-dom";
import Routes from "@/navigation/Routes";


const WebsiteApp = () => {
    return (
        <div data-theme="black" className="bg-base-100 min-h-screen">
            <RouterProvider router={Routes} />
        </div>
    );
};

export default WebsiteApp;
