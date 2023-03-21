import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/colors.css";
import "./styles/main.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

const AppContainer = () => (
  <>
    <CssBaseline />
    <Container maxWidth="xs" id="content">
      <Stack
        sx={{ minHeight: "100vh", alignItems: "stretch", py: 2 }}
        spacing={2}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Web Application
        </Typography>
        <Typography variant="body1" sx={{}}>
          This is a frontend web application template, built by Nicholas
          Gardella. It uses React, TypeScript, and Material UI (MUI), MUI Icons,
          React Router DOM v6, and Vite with SWC. To check the router, try
          navigating to <Link to="/test-router">/test-router</Link>.
        </Typography>
      </Stack>
    </Container>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: AppContainer(),
  },
  {
    path: "/test-router",
    element: (
      <Container maxWidth="xs" id="content" sx={{ minHeight: "100vh" }}>
        <Typography variant="h3" sx={{ textAlign: "center", p: 5 }}>
          Router Test Success
        </Typography>
      </Container>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
