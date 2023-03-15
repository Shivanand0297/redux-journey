import { useAddAlbumMutation, useFetchAlbumsQuery, useRemoveAlbumMutation } from "../store";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

const AlbumList = ({ user }) => {
  const { data, isFetching, error } = useFetchAlbumsQuery(user); //user argument is going into query() in the albumApi function. whenever album list is getting render  api request is going
  // isLoading -> true only when fetching data for the first time.
  // isFetching -> true if currently loading data.
  // useFetchAlbumsQuery(user) -> this will only make one request no matter how many times the component renders

  // hook for adding albums to a specific user
  const [ addAlbum, results ] = useAddAlbumMutation(user);
  const handleAddAlbums = () =>{
    addAlbum(user)
    // right now the data is getting updated in db.json but it is not showing automatically on the screen in the album lists
    // we can deal with it in two ways 
    // 1. we can take the response and store in the redux store then after state updated the component will automatically rerenders and displays the list of album data.
    // -> this approach will make our code more complex.

    // 2. what we can do is to make another request to fetch the related albums. this is recommended way.
    // but in this way we have end up making 2 requests.

    // we can write code to fetch the albums manually, but it is not the redux way.

    // we will automate this task. by adding tags in the albumApi function. 

  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold" >Albums for {user.name}</h3>
        <Button
            onClickFunction={handleAddAlbums}
            loading={results.isLoading}
          >
            + Add Albums
        </Button>
      </div>
      {isFetching ? (
        <Skeleton times={1} size="h-4 w-full" />
      ) : (
        <>
          {data?.map((album) => (
             <AlbumListItem album={album} key={album.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default AlbumList;
