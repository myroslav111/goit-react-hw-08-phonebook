import { Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import RegisterPage from "./page/RegisterPage";
import LogInPage from "./page/LogInPage";
import StartPage from "./page/StartPage";
import AddContact from "./page/AddContact";
import PhoneBook from "./page/PhoneBook";
import Navigation from "./components/Navigation";

// import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />

          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/add-contacts" element={<AddContact />} />
            <Route path="/contacts" element={<PhoneBook />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ToastContainer autoClose={1000} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
