import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals.js';

import App from "./App.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import { SearchContextProvider } from "./context/SearchContext.js";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();


// backend url present in
// D: \booking.com - clone\client\src\components\featured\Featured.jsx
// D: \booking.com - clone\client\src\components\propertyList\PropertyList.jsx
// D: \booking.com - clone\client\src\components\featuredProperties\FeaturedProperties.jsx
