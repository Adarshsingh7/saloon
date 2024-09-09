import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
});

function AppLayout() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
}

export default AppLayout;
