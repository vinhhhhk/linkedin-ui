import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import "./App.css";
import { routes } from "./routes";
// import AuthProvider from "./Context/AuthProvider";
import DefaultLayout from "./components/layout/DefaultLayout";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Routes>
            {routes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
