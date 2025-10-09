import { createBrowserRouter } from "react-router-dom";
import { useParams} from "react-router-dom";

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

const ProfileDetails = () => {
  const { userId } = useParams();
  return <div>Profile Details of user {userId}</div>;
}

const ProfileSettings = () => {
  const { userId } = useParams();
  return <div>Profile Settings of user {userId}</div>;
}

export default router;
