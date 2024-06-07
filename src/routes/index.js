import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageContent from "../components/PageContent";
import DefaultLayout from "../layouts/DefaultLayout";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
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
