// react icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoTrashcan } from "react-icons/go";

// album remove method
import { useRemoveAlbumMutation } from "../store";

// ExpandablePanel component
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleDeleteAlbum = () =>{
    removeAlbum(album);
  }
  
  const header = (
    <div className="flex justify-between items-center gap-3">
      <button
        onClick={handleDeleteAlbum}
        disabled={removeAlbumResults.isLoading}
      >
        {removeAlbumResults.isLoading ? (
          <AiOutlineLoading3Quarters className="animate-spin text-red-700" />
        ) : (
          <GoTrashcan />
        )}
      </button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel header={header} key={album.id}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumListItem;
