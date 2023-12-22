import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);



// backend url present in
// D: \booking.com - clone\admin\src\pages\login\Login.jsx
// D: \booking.com - clone\admin\src\pages\new\New.jsx
// D: \booking.com - clone\admin\src\pages\newHotel\NewHotel.jsx
// D: \booking.com - clone\admin\src\pages\newRoom\NewRoom.jsx


// url present in
// D: \booking.com - clone\admin\src\components\datatable\Datatable.jsx