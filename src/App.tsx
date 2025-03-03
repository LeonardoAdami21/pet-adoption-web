import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar title="PawsFinds" />
      {children}
      <Footer title="PawsFinds" />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home description="The joy of pet adoption" />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
