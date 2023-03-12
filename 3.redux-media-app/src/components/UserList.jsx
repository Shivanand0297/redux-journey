import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// async thunk for fetching data
import { addUser, fetchUsers } from "../store";

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

  const handleAddUser = () =>{
    dispatch(addUser())
  }

  return (
    <div>
      {isLoading ? (
        <Skeleton times={8} size="h-6 w-4/5"/>
      ) : (
        <>
          <div
            className="flex flex-col justify-start container mx-auto w-4/5 m-2"
          >

            <div className="flex justify-end">
              <button
                className="bg-blue-400 border rounded text-white px-2 py-[6px] text-sm"
                onClick={handleAddUser}
              >
                + Add User
              </button>
            </div>

            {data && data.map((user) => (
              <List key={user.id} user={user} />
              ))}
            <p>{error ? "Error Fetching data" : null}</p>

          </div>
        </>
      )}
    </div>
  );
};

export default UserList;
