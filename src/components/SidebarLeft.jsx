import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { id } = useParams();

  const isCommunityRolePage =
    location.pathname.includes("/communities/") &&
    (location.pathname.includes("/admin") || location.pathname.includes("/voter"));

  return (
    <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-blue-600 text-white p-5 shadow-xl z-20">
      {/* <h2 className="text-2xl font-bold mb-5">
        {isCommunityRolePage ? "Roles" : "Community Actions"}
      </h2> */}
      <nav className="flex flex-col gap-4">
        {isCommunityRolePage ? (
          <>
            <NavLink
              to={`/communities/${id || "default"}/admin`}
              className={`p-3 rounded-lg text-lg ${
                location.pathname === `/communities/${id}/admin`
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
            >
              Admin
            </NavLink>
            <NavLink
              to={`/communities/${id || "default"}/voter`}
              className={`p-3 rounded-lg text-lg ${
                location.pathname === `/communities/${id}/voter`
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
            >
              Voter
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/communities/create"
              className={`p-3 rounded-lg text-lg ${
                location.pathname === "/communities/create"
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
            >
              ➕ Create Community
            </NavLink>
            <NavLink
              to="/communities/default/join"
              className={`p-3 rounded-lg text-lg ${
                location.pathname === `/communities/default/join`
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
            >
              🤝 Join Community
            </NavLink>
            <NavLink
              to="/communities/default/admin"
              className={`p-3 rounded-lg text-lg ${
                location.pathname === `/communities/default/admin`
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-blue-500"
              }`}
            >
              🏠 My Communities
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

