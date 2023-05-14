import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Profilescreen from "./screens/Profilescreen";
import Adminscreen from "./screens/Adminscreen";
import UpdateRoom from "./components/UpdateRoom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />

          <Route
            path="/book/:roomid/:fromdate/:todate"
            exact
            Component={Bookingscreen}
          />
          <Route path="/register" exact Component={Register} />
          <Route path="/login" exact Component={Login} />
          <Route path="/profile" exact Component={Profilescreen} />
          <Route path="/admin" exact Component={Adminscreen} />
          <Route path="/updateroom/:id" exact Component={UpdateRoom} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
