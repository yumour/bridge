import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContent from "../components/PageContent";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import Dashboard from "../pages/Admin/Dashboard";
import Inventory from "../pages/Admin/Inventory";
import Orders from "../pages/Admin/Orders";
import Customers from "../pages/Admin/Customers";
import Login from "../pages/Admin/Login";
import Thesis from "../components/Thesis/Thesis";
import ThesisDetail from "../components/Thesis/ThesisDetail";
import Lectures from "../components/Lectures/Lectures";
import LectureDetail from "../components/Lectures/LectureDetail";
import Books from "../components/Books/Books";
import Templates from "../components/Templates/Templates";
import Events from "../components/Events/Events";
import ContactUs from "../components/Contact";
function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: (
        <DefaultLayout>
          <ErrorPage />
        </DefaultLayout>
      ),
      children: [
        {
          path: "thesis/:id",
          element: (
            <DefaultLayout>
              <PageContent>
                <ThesisDetail />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "module/:id",
          element: (
            <DefaultLayout>
              <PageContent>
                <LectureDetail />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "books",
          element: (
            <DefaultLayout>
              <PageContent>
                <Books />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "events",
          element: (
            <DefaultLayout>
              <PageContent>
                <Events />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "contact",
          element: (
            <DefaultLayout>
              <PageContent>
                <ContactUs />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "templates",
          element: (
            <DefaultLayout>
              <PageContent>
                <Templates />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "thesis",
          element: (
            <DefaultLayout>
              <PageContent>
                <Thesis />
              </PageContent>
            </DefaultLayout>
          ),
        },
        {
          path: "lectures",
          element: (
            <DefaultLayout>
              <PageContent>
                <Lectures />
              </PageContent>
            </DefaultLayout>
          ),
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/admin",
          element: <AuthLayout />,
          children: [
            {
              path: "dash-board",
              element: (
                <PageContent>
                  <Dashboard />
                </PageContent>
              ),
            },
            {
              path: "inventory",
              element: (
                <PageContent>
                  <Inventory />
                </PageContent>
              ),
            },
            {
              path: "customers",
              element: (
                <PageContent>
                  <Customers />
                </PageContent>
              ),
            },
            {
              path: "orders",
              element: (
                <PageContent>
                  <Orders />
                </PageContent>
              ),
            },
          ],
        },
        {
          path: "",
          element: (
            <DefaultLayout>
              <PageContent>
                <Home />
              </PageContent>
            </DefaultLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
