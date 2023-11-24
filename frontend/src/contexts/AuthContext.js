import PropTypes from "prop-types";
import { createContext } from "react";
import { handleLogin, handleLogout } from "../store/account";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.account);

    console.log(state);

    axios.defaults.baseURL = "http://localhost:5000";

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (401 === error?.response?.status) {
                dispatch(handleLogout());
            }
            return error;
        }
    );

    if ("user" in state && state.user && "jwt_access" in state.user) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + state.user.jwt_access;
    }

    const login = (email, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/users/login/", {
                    email: email,
                    password: password,
                })
                .then((response) => {
                    const { data } = response;
                    console.log(response);
                    if (response.status === 200) {
                        dispatch(
                            handleLogin({
                                user: {
                                    id: data._id,
                                    name: data.name,
                                    email: data.email,
                                    isAdmin: data.isAdmin,
                                    jwt_access: data.jwt_access,
                                    jwt_refresh: data.jwt_refresh,
                                },
                            })
                        );
                    }
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    };

    const logout = () => {
        dispatch(handleLogout());
    };

    const register = async (name, email, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/register/", {
                    name: name,
                    email: email,
                    password: password,
                    isAdmin: false,
                })
                .then((response) => {
                    const responseData = response.data;
                    console.log(responseData);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    const forgotPassword = async (email) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/forgot-password/", {
                    email: email,
                })
                .then((response) => {
                    const responseData = response.data;
                    console.log(responseData);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    const resetPassword = async (email, password) => {
        return new Promise((resolve, reject) => {
            axios
                .post("/reset-password/", {
                    email: email,
                    password: password,
                    token: new URL(window.location.href).searchParams.get(
                        "token"
                    ),
                })
                .then((response) => {
                    const responseData = response.data;
                    console.log(responseData);
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    const updateProfile = () => {};
    const googleSignIn = () => {};

    return (
        <AuthContext.Provider
            value={{
                ...state,
                login,
                logout,
                register,
                forgotPassword,
                resetPassword,
                updateProfile,
                googleSignIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthContext;
