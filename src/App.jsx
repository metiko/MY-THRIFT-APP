import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Root from "./roots/roots";
import { LoadingHelper } from "./lib/LoadingHelper";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Status";
import GroupManagement from "./pages/GroupManagement";
import { Group } from "lucide-react";
import Welcome from "./pages/WelcomePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <Index />
            </Suspense>
          ),
        },
        {
          path: "/WelcomePage",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <Welcome/>
            </Suspense>
          ),
        },
        {
          path: "/dashboard",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <Signup/>
            </Suspense>
          ),
        },
        {
          path: "/Status",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <Dashboard/>
            </Suspense>
          ),
        },

          {
            path: "/management",
            element: (
              <Suspense fallback={<LoadingHelper />}>
                <GroupManagement/>
              </Suspense>
            ),
          },
        {
          path: "*",
          element: (
            <Suspense fallback={<LoadingHelper />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
