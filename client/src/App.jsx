import "./app.scss";
import "./output.css";
// import Video from "./components/video/Video.jsx";
// import Form from "./components/form/Form.jsx";
// import { useState } from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import LeftBar from "./components/leftBar/LeftBar.jsx";
import RightBar from "./components/rightBar/RightBar.jsx";
import Dashboard from "./pages/adminDashboard/Dashboard.jsx";
import Home from "./pages/home/Home.jsx";
import { useSessions } from "./context/authContext.jsx";

function App() {
  // const [openForm, setOpenForm] = useState(false);

  // const changeSlide = (slideId) => {
  //   const targetSlide = document.getElementById(slideId)
  //   if (targetSlide) {
  //     targetSlide.scrollIntoView({ block:"nearest", inline:"center"})
  //   }
  // }

  const { currentUser } = useSessions()// Temporary

  console.log({currentUserAPP: currentUser});

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  const DashboardLayout = () => {
    return (
      <div id="dashboardContainer">
        <NavBar />
        <div style={{ display: "flex" }} className="dashboard">
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
