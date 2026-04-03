import { RouterProvider } from "react-router-dom";
import Routes from "@/navigation/Routes";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_SERVER}/api`,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

const WebsiteApp = () => {
    return (
        <div data-theme="black" className="bg-base-100 min-h-screen">
            <ApolloProvider client={client}>
                <RouterProvider router={Routes} />
            </ApolloProvider>
        </div>
    );
};

export default WebsiteApp;
