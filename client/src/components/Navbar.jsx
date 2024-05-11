import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  console.log(user);
  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">Task Manager</h1>
      </Link>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Welcome {user.username}</li>
            <li>
              <Link to="/add-task">Add Task</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
