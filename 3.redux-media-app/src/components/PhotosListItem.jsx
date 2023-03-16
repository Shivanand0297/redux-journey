import { GoTrashcan } from "react-icons/go"
import { useRemovePhotoMutation } from "../store"

const PhotosListItem = ({ photo }) => {

  const [removePhoto] = useRemovePhotoMutation()

  const handleDeletePhoto = () =>{
    removePhoto(photo)
  }

  return (
    <div>
      <div className="h-32 w-32 relative cursor-pointer">
        <img 
          src={photo.url} 
          alt="random pic" 
          className="w-full h-full object-cover rounded"
        />
        <div 
          className="absolute inset-0 bg-red-50 rounded flex justify-center items-center opacity-0 hover:opacity-80 transition .5s ease-in"
          onClick={handleDeletePhoto}
        >
          <GoTrashcan className="text-2xl text-red-600" />
        </div>
      </div>
    </div>
  )
}

export default PhotosListItem