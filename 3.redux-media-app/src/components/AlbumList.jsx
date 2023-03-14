import { useFetchAlbumsQuery } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

const AlbumList = ({ user }) => {
  const { data, isLoading, error } = useFetchAlbumsQuery(user); //user argument is going into query() in the albumApi function. whenever album list is getting render  api request is going
  // isLoading -> true only when fetching data for the best time.
  // isFetching -> true if currently loading data.
  // this will only make one request no matter how many times the component renders

  console.log(data, isLoading, error);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3>Albums for {user.name}</h3>
        <button className="btn">+ Add Albums</button>
      </div>
      {isLoading ? (
        <Skeleton times={1} size="h-4 w-full" />
      ) : (
        <>
          {data?.map((album) => {
            const header = <div>{album.title}</div>;

            return (
              <ExpandablePanel header={header}>List of photos</ExpandablePanel>
            );
          })}
        </>
      )}
    </div>
  );
};

export default AlbumList;
