import Home from "../Home";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
import User from "../pages/User";
import NotFound from "../utils/NotFound";
import AuthGuard from "./route-guards/AuthGuard";

const HomeRoute = {
    path: "/",
    element: (
        <AuthGuard>
            <SearchBar />
            <Home />
            <Footer />
        </AuthGuard>
    ),
    children: [
        {
            path: "home",
            element: <Home />,
        },
    ],
};

const CartRoute = {
    path: "/cart",
    element: (
        <AuthGuard>
            <SearchBar />
            {/* <Cart /> */}
            <Footer />
        </AuthGuard>
    ),
};

const CheckoutRoute = {
    path: "/checkout",
    element: (
        <AuthGuard>
            <SearchBar />
            {/* <Checkout /> */}
            <Footer />
        </AuthGuard>
    ),
};

const UserRoute = {
    path: "/user",
    element: (
        <AuthGuard>
            <SearchBar />
            <User />
            <Footer />
        </AuthGuard>
    ),
};

const NotFoundRoute = {
    path: "*",
    element: (
        <AuthGuard>
            <SearchBar />
            <NotFound />
            <Footer />
        </AuthGuard>
    ),
};

const HomeRoutes = [
    HomeRoute,
    CartRoute,
    CheckoutRoute,
    UserRoute,
    NotFoundRoute,
];

export default HomeRoutes;
