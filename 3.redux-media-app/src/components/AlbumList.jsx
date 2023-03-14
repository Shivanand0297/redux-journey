import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

const AlbumList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user); //user argument is going into query() in the albumApi function. whenever album list is getting render  api request is going
  // isLoading -> true only when fetching data for the best time.
  // isFetching -> true if currently loading data.
  // this will only make one request no matter how many times the component renders

  const [ addAlbum, results ] = useAddAlbumMutation(user);
  console.log(results)
  const handleAddAlbums = () =>{
    addAlbum(user)
    // right now the data is getting updated in db.json but it is not showing automatically on the screen in the album lists
    // we can deal with it in two ways 
    // 1. we can take the response and store in the redux store then after state updated the component will automatically renders and displays the list of album data.
    // -> this approach will make our code more complex.
    // 2. what we can do is to make another request to fetch the related albums. this is recommended way.
    // but in this way we have to make 2 requests.

    // we can write code to fetch the albums manually, but it is not the redux way.

    // we will automate this task. 

  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>Albums for {user.name}</h3>
        <button 
          className="btn"
          onClick={handleAddAlbums}
        >
          + Add Albums
        </button>
      </div>
      {isLoading ? (
        <Skeleton times={1} size="h-4 w-full" />
      ) : (
        <>
          {data?.map((album) => {
            const header = <div>{album.title}</div>;

            return (
              <ExpandablePanel header={header} key={album.id} >List of photos</ExpandablePanel>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AlbumList;
