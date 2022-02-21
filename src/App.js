// import logo from './logo.svg';
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import About from "./components/About";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App  m-4">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
                <Routes>
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
