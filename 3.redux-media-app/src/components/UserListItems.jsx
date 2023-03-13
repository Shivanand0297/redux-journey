import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {  BiDownArrow } from "react-icons/bi"
import { GoTrashcan } from "react-icons/go"
import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import AlbumList from "./AlbumList";
import ExpandablePanel from "./ExpandablePanel";

const UserListItems = ({user}) => {

  const [ doRemoveUser, isLoading, error ] = useThunk(removeUser)

  const handleDeleteUser = (user) =>{
    doRemoveUser(user)
  }

  const header = <>
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
  </>

  return (
    <ExpandablePanel header={header}>
        <AlbumList user={user} />
    </ExpandablePanel>
  );
};

export default UserListItems;
