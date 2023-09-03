import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import Header from "./Components/Header";
import Help from "./Components/Help";
import Countries from "./Components/Countries";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/countries' element={<Countries />}></Route>
      <Route path='/help' element={<Help />}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
