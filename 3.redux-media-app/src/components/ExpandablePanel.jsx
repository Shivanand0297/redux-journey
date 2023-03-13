import { useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

const ExpandablePanel = ({header, children}) => {

  const [dropdown, setDropdown] = useState(false)

  return (
    <div className="border border-gray-700 rounded my-2">
      <div className="container mx-auto flex items-center h-6 w-full py-4 px-2 justify-between gap-4">
        <div className="flex items-center justify-between w-full">
          {header}
          <div
            className="cursor-pointer"
            onClick={()=>setDropdown(!dropdown)}
          >
            { dropdown ? <BiUpArrow/> : <BiDownArrow />}
          </div>
        </div>
      </div>
      <div className={ dropdown ? `p-2 border-t` : `hidden p-2 border-t`}>
          {dropdown && children}
      </div>
    </div>
  );
};

export default ExpandablePanel;
