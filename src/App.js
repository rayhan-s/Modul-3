import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Page />
      <Footer />
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
