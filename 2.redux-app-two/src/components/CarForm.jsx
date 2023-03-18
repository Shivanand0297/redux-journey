import { useDispatch, useSelector } from "react-redux";

// importing changeName action object from store
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {

  // to dispatch actions to redux store
  const dispatch = useDispatch();

  // extracting name and cost from the return state
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleCarNameChange = (e) => {
    // onChange dispatching changeName action with e.target.value as payload
    dispatch(changeName(e.target.value));
  };

  const handleCarCostChange = (e) => {
    // input value will be a string value we need to convert it into number
    let value = Number(e.target.value); //parseInt(e.target.value)
    dispatch(changeCost(value));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addCar({ name, cost}))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{display: "flex", gap: "20px"}} >
        <div>
          <label htmlFor="carForm">Name:</label>
          <input
            type="text"
            name="carForm"
            value={name}
            required
            onChange={handleCarNameChange}
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input
            type="number"
            name="cost"
            value={cost}
            required
            onChange={handleCarCostChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
