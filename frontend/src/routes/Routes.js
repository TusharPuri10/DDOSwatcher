import { useRoutes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import LoginRoutes from "./LoginRoutes";

const Routes = () => useRoutes([...HomeRoutes, LoginRoutes]);

export default Routes;
