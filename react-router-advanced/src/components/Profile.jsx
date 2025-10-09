import { createBrowserRouter } from "react-router-dom";
import { useParams} from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfileDetails />,
  },
  {
    path: "/settings",
    element: <ProfileSettings />,
  },
]);

const Home = () => {
  return <div>Home Page</div>;
}

const About = () => {
  return <div>About Page</div>;
}

const ProfileDetails = () => {
  const { blogId } = useParams();
  return <div> BlogPost {blogId}</div>;
}

function ProfileSettings() {
    const { userId } = useParams();
    return <div>Profile Settings of user {userId}</div>;
}

export default router;
