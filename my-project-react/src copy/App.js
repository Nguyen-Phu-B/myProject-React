import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlRoutes from "./Routes/Routes";
import { Fragment } from "react";

function App() {
    return (
        <Router>
            <Routes>
                {PlRoutes.map((route, index) => {
                    const Page = route.component;

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Fragment>
                                    <Page />
                                </Fragment>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
