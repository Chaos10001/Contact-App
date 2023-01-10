import "./App.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AddContact from "./component/AddContact";
import EditContent from "./component/EditContent";

function App() {
  return (
    <Router>
      <div className="App">
        <ToastContainer />
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add">
            <AddContact />
          </Route>
          <Route path="/edit/:id">
            <EditContent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
