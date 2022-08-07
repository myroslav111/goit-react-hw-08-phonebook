import { Route, Routes } from "react-router-dom";
import AddContact from "./page/AddContact";
import PhoneBook from "./page/PhoneBook";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <>
      <Navigation />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/" element={<AddContact />} />
            <Route path="/contacts" element={<PhoneBook />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

//**---------------------------------------------------------- */
// function App() {
//   return (
//     <>
//       <Navigation />
//       <Provider store={store}>
//         {/* <div className="container"> */}
//         <Routes>
//           <Route path="/" element={<AddContact />} />
//           {/* <Route
//               path="/"
//               element={
//                 // транзишин не работает
//                 <CSSTransition
//                   in={true}
//                   timeout={3000}
//                   classNames="page"
//                   unmountOnExit
//                 >
//                   <div className="page">
//                     <AddContact />
//                   </div>
//                 </CSSTransition>
//               }
//             /> */}

//           <Route path="/contacts" element={<PhoneBook />} />
//           {/* <Route
//               path="/contacts"
//               element={
//                 // транзишин не работает
//                 <CSSTransition
//                   in={true}
//                   timeout={3000}
//                   classNames="page"
//                   unmountOnExit
//                 >
//                   <div className="page">
//                     <PhoneBook />
//                   </div>
//                 </CSSTransition>
//               }
//             /> */}
//         </Routes>
//         {/* </div> */}
//       </Provider>
//     </>
//   );
// }

// export default App;
/*--------------------------------------------------------------------------- */
