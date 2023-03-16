import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";

// custom button component
import Button from "./Button";
import PhotosListItem from "./PhotosListItem";
import Skeleton from "./Skeleton";

const PhotosList = ({ album }) => {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhotos, addPhotosResult] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhotos(album);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button
          onClickFunction={handleAddPhoto}
          loading={addPhotosResult.isLoading}
        >
          + Add Photos
        </Button>
      </div>
      <div className="flex gap-3 justify-start items-center flex-wrap p-1 mt-2">
        {isFetching ? (
          <Skeleton times={1} size="h-32 w-full" />
        ) : (
          <>
            {data &&
              data.map((photo) => <PhotosListItem key={photo.id} photo={photo} />)}
            <p>{error ? "Error Fetching data" : null}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotosList;
