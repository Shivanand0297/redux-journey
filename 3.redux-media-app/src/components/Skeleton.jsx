// this skeleton component will take a prop which will be equal to the times we want to render skeleton component

const Skeleton = ({ times, size="h-4 w-full" }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_item, index) => (
      <div
        key={index}
        className={`container mx-auto relative bg-gray-200 rounded overflow-hidden mb-2.5 py-4 px-2 my-2 ${size}`}
      >
        <div className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200" />
      </div>
    ));
  return boxes;
};

export default Skeleton;
