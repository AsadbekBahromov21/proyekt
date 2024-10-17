import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";
import CreatePost from "../pages/Create-Post/CreatePost";

const Home: LazyExoticComponent<any> = lazy(() => import("../pages/home/Home"));
const SingUp: LazyExoticComponent<any> = lazy(
  () => import("../pages/auth/sinp-up/Sing-up")
);
const Layout: LazyExoticComponent<any> = lazy(
  () => import("../pages/layout/Layout")
);

const Login: LazyExoticComponent<any> = lazy(
  () => import("../pages/auth/login/Login")
);
const Auth: LazyExoticComponent<any> = lazy(() => import("../pages/auth/Auth"));
const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "CreatePost",
          element: (
            <Suspense>
              <CreatePost />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense>
          <h2>404</h2>
        </Suspense>
      ),
    },
    {
      path: "/auth",
      element: (
        <Suspense>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          path: "login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "singUp",
          element: (
            <Suspense>
              <SingUp />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default Routers;
