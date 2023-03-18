import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCarCost = useSelector(({ cars: { carList, searchTerm } }) => {
    return carList
      .filter((car) =>  // getting cars based on search term
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0); //calculating total cost
  });

  return(
    <div>
      <p>Total Cost: {totalCarCost === 0 ? "No Cars to total" : `$ ${totalCarCost}`}</p>
    </div>
  )
};

export default CarValue;
