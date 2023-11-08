import "./App.css";
import Home from "./Pages/Home";
import Layout from "./components/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="text-center ">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
