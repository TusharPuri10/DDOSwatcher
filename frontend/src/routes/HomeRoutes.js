import Home from "../Home";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import TabWindow from "../components/TabWindow";
import Analyse from "../pages/Analyse";
import User from "../pages/User";
import NotFound from "../utils/NotFound";

const HomeRoute = {
    path: "/",
    element: (
        <>
            <SearchBar />
            <Home />
            <Footer />
        </>
    ),
    children: [
        {
            path: "home",
            element: <Home />,
        },
    ],
};

const AnalyseRoute = {
    path: "/analyse",
    element: (
        <>
            <SearchBar />
            <Analyse />
            <Footer />
        </>
    ),
};

const CartRoute = {
    path: "/cart",
    element: (
        <>
            <SearchBar />
            <Footer />
        </>
    ),
};

const CheckoutRoute = {
    path: "/checkout",
    element: (
        <>
            <SearchBar />
            <Footer />
        </>
    ),
};

const UserRoute = {
    path: "/user",
    element: (
        <>
            <SearchBar />
            <User />
            <Footer />
        </>
    ),
};

const NotFoundRoute = {
    path: "*",
    element: (
        <>
            <SearchBar />
            <NotFound />
            <Footer />
        </>
    ),
};

const HomeRoutes = [
    HomeRoute,
    CartRoute,
    CheckoutRoute,
    UserRoute,
    NotFoundRoute,
    AnalyseRoute,
];

export default HomeRoutes;
