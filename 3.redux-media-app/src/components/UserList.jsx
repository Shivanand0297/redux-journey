import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// async thunk for fetching data
import { addUser, fetchUsers } from "../store";

// importing skeleton
import Skeleton from "./Skeleton";

// UserListItems component
import UserListItems from "./UserListItems";

// custom hook for fetching data
// to keep track of loading users
import useThunk from "../hooks/useThunk";

const UserList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUserError] = useThunk(fetchUsers);
  // to keep track of creating user state
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    doFetchUsers();

    /* setIsLoadingUsers(true);
    // dipatching action for making request

    // dispatch(fetchUsers()).then() this will call the then() whether the promise resolves or rejects
    dispatch(fetchUsers())
      .unwrap() //this will give the traditional promise back we can use .then() like we use to do
      .catch((err) => setLoadingUserError(err))
      .finally(() => setIsLoadingUsers(false));

    // Note: after making request DO NOT MAKE setIsLoadingUsers(false)
    // setIsLoadingUsers(false) NOPE!!!, because here async thunk dispatch() function is async is nature it will immediately setIsLoadingUsers to false
 */
    // eslint-disable-next-line
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  };

  return (
    <div>
      <div className="flex flex-col justify-start container mx-auto w-4/5 m-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Users</h1>
          <button
            className="btn disabled:cursor-not-allowed"
            onClick={handleAddUser}
            disabled={isCreatingUser}
          >
            {isCreatingUser ? (
              <AiOutlineLoading3Quarters className="animate-spin text-white text-sm w-[70px] h-[20px]" />
            ) : (
              "+ Add User"
            )}
          </button>
          {creatingUserError && "error creating user"}
        </div>
        {isLoadingUsers ? (
          <Skeleton times={9} size="h-6 w-full" />
        ) : (
          <>
            {data && data.map((user) => <UserListItems key={user.id} user={user} />)}
            <p>{loadingUserError ? "Error Fetching data" : null}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
