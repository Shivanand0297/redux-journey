import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {  BiDownArrow } from "react-icons/bi"
import { GoTrashcan } from "react-icons/go"
import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";

const List = ({user}) => {

  const [ doRemoveUser, isLoading, error ] = useThunk(removeUser)

  const handleDeleteUser = (user) =>{
    doRemoveUser(user)
  }

  return (
    <div
      className="container mx-auto flex items-center h-6 w-full py-4 px-2 my-2 justify-between gap-4 border border-gray-700 rounded cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={()=>handleDeleteUser(user)}
          disabled={isLoading}
        >
          {isLoading ? 
          <AiOutlineLoading3Quarters className="animate-spin text-red-700" /> :
          <GoTrashcan />}
        </button>
        <span>{user.name}</span>
        {error && "Error deleting user"}
      </div>

      <div>
        <BiDownArrow />
      </div>
    </div>
  );
};

export default List;
