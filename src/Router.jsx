import { createBrowserRouter } from "react-router-dom";
import TodoApp from "./TodoApp";
import Post from "./Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoApp />,
  },
  {
    path: "/post",
    element: <Post />,
  },
]);

export default router;
