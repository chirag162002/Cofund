import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Company_cards from "./components/Company_cards";
import Home from "./components/Home";
 import Company_form from "./components/Company_form";
// import CompanyCard from "./components/Single_company";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/companies"
              element={<Company_cards></Company_cards>}
            ></Route>
            <Route
              exact
              path="/profile"
              element={<Company_cards></Company_cards>}
            ></Route>
            { <Route
              exact
              path="/add"
              element={<Company_form></Company_form>}
            ></Route> }

            {/* <Route exact path="/companies/:_id" element={<CompanyCard></CompanyCard>}></Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;