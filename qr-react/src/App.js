import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Design1 from "./pages/design-1";
import Design2 from "./pages/design-2";

function App (){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Design1 />} />
                <Route path="/Design-2" element={<Design2 />} />
            </Routes>
        </Router>
    );
}

export default App;

