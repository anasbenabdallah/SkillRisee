import React, { lazy } from "react";
import Loadable from "../Components/PageLoading/Loadable";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Chat from "../Pages/UserDashboard/ChatPage/Chat";
import NotFoundPage from "../Pages/UserDashboard/NotFoundPage/NotFoundPage";

// ==============================|| USER PAGES ||============================== //
//HomePage
const HomeLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/HomePage/HomeLayout"))
);
//UserProfilePage
const UserProfileLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/UserProfile/UserProfileLayout"))
);
//LeaderBoardPage
const LeaderBoardLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/LeaderBoardPage/LeaderBoardLayout"))
);
//SettingsPage
const SettingsLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/SettingsPage/SettingsLayout"))
);
//ContestDetailsPage
const ContestDetails = Loadable(
  lazy(() =>
    import("../Pages/UserDashboard/ContestDescriptionPage/ContestDetails")
  )
);
//BrowsePage
const BrowseLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/BrowsePage/BrowseLayout"))
);
//CompanyPage
const CompanyLayout = Loadable(
  lazy(() => import("../Pages/UserDashboard/CompanyPage/CompanyLayout"))
);
const AllJobs = Loadable(
  lazy(() =>
    import("../Pages/UserDashboard/BrowsePage/Content/WorkCards/AllJobs")
  )
);
const BlogDetail = Loadable(
  lazy(() =>
    import("../Pages/UserDashboard/BrowsePage/Content/WorkCards/BlogDetail")
  )
);

const SearchResult = Loadable(
  lazy(() => import("../Pages/UserDashboard/SearchResultPage/SearchResultPage"))
);

// ==============================|| MAIN USER ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <HomeLayout />,
    },
    {
      path: "/profile/:userId",
      element: <UserProfileLayout />,
    },
    {
      path: "/leaderboard",
      element: <LeaderBoardLayout />,
    },
    {
      path: "/settings",
      element: <SettingsLayout />,
    },

    {
      path: "/chat",
      children: [
        {
          index: true,
          element: <Chat />,
        },
        {
          path: ":selectedConversationId",
          element: <Chat />,
        },
      ],
    },

    {
      path: "/browse",
      children: [
        {
          index: true,
          element: <BrowseLayout />,
        },

        {
          path: "contestDetails/:id",
          element: <ContestDetails />,
        },
        {
          path: "MyJobs/:id",
          element: <BlogDetail />,
        },
      ],
    },
    {
      path: "/company",
      element: <CompanyLayout />,
    },
    {
      path: "/search/results",
      element: <SearchResult />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
};

export default MainRoutes;
