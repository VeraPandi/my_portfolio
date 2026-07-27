import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element="" />
        <Route path="about" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
