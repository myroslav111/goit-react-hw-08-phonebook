import { Route, Routes, Navigate } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { refresh } from "./redux/auth/auth-slice";
import { useEffect } from "react";
import operations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Navigation from "./components/Navigation";
const RegisterPage = lazy(() => import("./page/RegisterPage"));
const LogInPage = lazy(() => import("./page/LogInPage"));
const StartPage = lazy(() => import("./page/StartPage"));
const AddContact = lazy(() => import("./page/AddContact"));
const PhoneBook = lazy(() => import("./page/PhoneBook"));
// const Navigation = lazy(() => import("./components/Navigation"));

// import RegisterPage from "./page/RegisterPage";
// import LogInPage from "./page/LogInPage";
// import StartPage from "./page/StartPage";
// import AddContact from "./page/AddContact";
// import PhoneBook from "./page/PhoneBook";

// import { CSSTransition } from "react-transition-group";

function App() {
  const refreshPage = useSelector(refresh);

  console.log(refreshPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {!refreshPage && <Navigation />}

      <Suspense
        fallback={
          // <WrapSpiner>
          <div className="spiner">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#03e9f4"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>
          // </WrapSpiner>
        }
      >
        <Routes>
          <Route path="/" element={<StartPage />} />
          {/* <Route path="/login" element={<LogInPage />} /> */}
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          {/* <Route path="/add-contacts" element={<AddContact />} /> */}
          {/* <Route path="/contacts" element={<PhoneBook />} />{" "} */}
          {/* <Route
            // path="/"
            index
            element={
              <PublicRoute redirectPath="/contacts" isLoggedIn={isLoggedIn}>
                <StartPage />
              </PublicRoute>
            }
          /> */}
          <Route element={<PublicRoute redirectPath="/" restricted />}>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          {/* <>
                <PrivateRoute path="/add-contacts">
                  <AddContact />
                </PrivateRoute>
              </> */}
          <Route
            path="/add-contacts"
            element={
              <PrivateRoute redirectPath="/">
                <AddContact />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectPath="/">
                <PhoneBook />
              </PrivateRoute>
            }
          />
          {/* <Route
                path="/add-contacts"
                element={
                  <PrivateRoute redirectPath={"/login"}>
                    <AddContact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectPath={"/login"}>
                    <PhoneBook />
                  </PrivateRoute>
                }
              /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={1000} />
      {/* </PersistGate> */}
      {/* </Provider> */}
    </>
  );
}

export default App;
