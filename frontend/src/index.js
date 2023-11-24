import { createRoot } from "react-dom/client";
import App from "./App";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { BASE_PATH } from "./config";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename={BASE_PATH}>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
