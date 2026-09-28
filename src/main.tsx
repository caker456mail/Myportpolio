import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

// pages 폴더 내 컴포넌트 import (파일명과 경로에 맞게 확인)
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Career from "./pages/Career";
import TroubleShooting from "./pages/TroubleShooting";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Sidebar와 Outlet이 있는 공통 레이아웃
    children: [
      { index: true, element: <Home /> },           // 경로: /
      { path: "projects", element: <Projects /> },  // 경로: /projects
      { path: "skills", element: <Skills /> },        // 경로: /tools
      { path: "career", element: <Career /> },
      { path: "troubleshooting", element: <TroubleShooting /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);