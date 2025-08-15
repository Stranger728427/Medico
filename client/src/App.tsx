// import './App.css'

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/media" element={<Media/>} */}
      </Routes>
    </>
  );
}

export default App;
