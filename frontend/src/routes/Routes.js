import { useRoutes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";

const Routes = () => useRoutes([...HomeRoutes]);

export default Routes;
