import { AiOutlineCloseCircle, AiOutlineCaretDown } from "react-icons/ai"

const List = ({user}) => {
  return (
    <div
      className="container mx-auto flex items-center h-6 w-full py-4 px-2 my-2 justify-between gap-4 border border-gray-700 rounded cursor-pointer"
    >
      <div className="flex items-center justify-between gap-3">
        <AiOutlineCloseCircle />
        <span>{user.name}</span>
      </div>

      <div>
        <AiOutlineCaretDown />
      </div>
    </div>
  );
};

export default List;
