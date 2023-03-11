import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dipatching action for making request
    dispatch(fetchUsers());

    // eslint-disable-next-line
  }, []);

  return <div>Userlists</div>;
};

export default UserList;
