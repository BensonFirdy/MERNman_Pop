import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";
import People from "./components/People";
import {
  BrowserRouter, //this allos us to enable routing
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="orange">The Star Wars API</h1> 
        <p className="text-danger">Disclaimer: Some API information are not working!</p><br />
        <Form></Form>
        <Switch>
          {/* this is route parameter */}
          <Route exact path="/:category/:id">
            <Result></Result>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;