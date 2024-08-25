import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./pages/Login";
import Home2 from "./pages/main/home";
import About from "./pages/main/about";
import Contact from "./pages/main/contact";
import Admin from "./pages/main/admin/admin";
import Atte from "./pages/main/admin/attendies";
import Atform from "./pages/main/admin/atForm";
import Email from "./pages/main/admin/email";
import Eventform from "./pages/main/admin/eventdetails";
import Invite from "./pages/main/admin/invite";
import Rsvp from "./pages/main/admin/rsvp";
import Ticket from "./pages/main/admin/ticket";
import Compose from "./pages/main/admin/composeemail";
import Price from "./pages/main/admin/priceForm";
import Oc from "./pages/main/admin/oc";
import Layout from "./pages/Layout";
import UserSelect from "./pages/UserSelect";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
       
        <Route path="/" element={<Home2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/atform" element={<Atform />} />
        <Route path="/email" element={<Email />} />
        <Route path="/compose" element={<Compose />} />
        <Route path="/price" element={<Price />} />
        <Route path="/oc" element={<Oc />} />
        <Route path="/eventform" element={<Eventform />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/rsvp" element={<Rsvp/>} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/atte" element={<Atte />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="user-select" element={<UserSelect />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  ),
  // { basename: import.meta.env.DEV ? "/" : "/react-face-auth/" }
  { basename: "/" }
);

export default router;
