import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// async thunk for fetching data
import { fetchUsers } from "../store";

// importing skeleton
import Skeleton from "./Skeleton";
import List from "./List";

const UserList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    // dipatching action for making request
    dispatch(fetchUsers());

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {isLoading ? (
        <Skeleton times={2} size="h-6 w-4/5"/>
      ) : (
        <>
          {data && data.map((user) => (
            <List key={user.id} user={user} />
            ))}
          <p>{error ? "Error Fetching data" : null}</p>
        </>
      )}
    </div>
  );
};

export default UserList;
