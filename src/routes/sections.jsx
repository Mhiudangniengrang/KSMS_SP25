import { Outlet, useRoutes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Error404, Loading } from "../components";
import Authentication from "../pages/AdminPage/Authentication";
import AdminDashboard from "../layout/admin";
import ManagerDashboard from "../layout/manager";
import RefereeDashboard from "../layout/referee";
import Category from "../section/admin/koishow/KoiShowAdmin/Category";

export const KoiShowPageAdmin = lazy(() =>
  import("../pages/AdminPage/KoiShowPage")
);
export const KoiShowDetailAdmin = lazy(() =>
  import("../pages/AdminPage/KoiShowDetailPage")
);
export const CreateShow = lazy(() =>
  import("../pages/AdminPage/CreateShowPage")
);
export const KoiShowPageManager = lazy(() =>
  import("../pages/ManagerPage/KoiShowPage")
);
export const KoiShowDetailManager = lazy(() =>
  import("../pages/ManagerPage/KoiShowDetailPage")
);
export const KoiShowPageReferee = lazy(() =>
  import("../pages/RefereePage/KoiShowPage")
);
export const KoiShowDetailReferee = lazy(() =>
  import("../pages/RefereePage/KoiShowDetailPage")
);
export const UserPage = lazy(() => import("../pages/AdminPage/UserPage"));
export const TeamPage = lazy(() => import("../pages/AdminPage/TeamPage"));
export const OverviewAdmin = lazy(() =>
  import("../pages/AdminPage/OverviewPage")
);

const ProtectedRoute = ({ children, allowedRole, userRole }) => {
  if (userRole !== allowedRole) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const Router = () => {
  const userRole = "admin";

  const routes = useRoutes([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      element: (
        <ProtectedRoute allowedRole="admin" userRole={userRole}>
          <AdminDashboard>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </AdminDashboard>
        </ProtectedRoute>
      ),
      path: "/admin",
      children: [
        { element: <OverviewAdmin />, path: "overview" },
        { element: <KoiShowPageAdmin />, path: "koiShow" },
        { element: <CreateShow />, path: "create-Show" },
        { element: <UserPage />, path: "users" },
        { element: <TeamPage />, path: "teams" },
        { element: <KoiShowDetailAdmin />, path: "koiShow/detail/:id" },
        // { element: <Category />, path: "koiShow/detail/:id" },
        { element: <Navigate to="/admin/koiShow" replace />, index: true },
        { element: <Error404 />, path: "*" },
      ],
    },
    {
      element: (
        <ProtectedRoute allowedRole="manager" userRole={userRole}>
          <ManagerDashboard>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </ManagerDashboard>
        </ProtectedRoute>
      ),
      path: "/manager",
      children: [
        { element: <KoiShowPageManager />, path: "koiShow" },
        { element: <KoiShowDetailManager />, path: "koiShow/detail/:id" },
        { element: <Navigate to="/manager/koiShow" replace />, index: true },
        { element: <Error404 />, path: "*" },
      ],
    },
    {
      element: (
        <ProtectedRoute allowedRole="referee" userRole={userRole}>
          <RefereeDashboard>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </RefereeDashboard>
        </ProtectedRoute>
      ),
      path: "/referee",
      children: [
        { element: <KoiShowPageReferee />, path: "koiShow" },
        { element: <KoiShowDetailReferee />, path: "koiShow/detail/:id" },
        { element: <Navigate to="/referee/koiShow" replace />, index: true },
        { element: <Error404 />, path: "*" },
      ],
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);

  return routes;
};
