import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
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
        }
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route element={<PublicRoute redirectPath="/contacts" restricted />}>
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PrivateRoute redirectPath="/" />}>
            <Route path="/add-contacts" element={<AddContact />} />
            <Route path="/contacts" element={<PhoneBook />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
