import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/UpdateBook";
import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/create" element={<CreateBook/>}/>
        <Route path="/update/:id" element={<UpdateBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
