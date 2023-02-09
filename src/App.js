import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomeCrud } from "./component/pages/HomeCrud";
import { Crudpage } from "./component/pages/Crudpage";
import { Navigation } from "./component/layout/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeCrud />} />
          <Route path="/todo" element={<Crudpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
