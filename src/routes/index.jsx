import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
    </Route>
  )
);

export default router;
