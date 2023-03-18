import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store"

const CarList = () => {
  const dispatch = useDispatch()
  const {carList, name} = useSelector(({ form , cars: {searchTerm, carList}})=>{  //filtering the list based on searchTerm
    const filteredList = carList.filter((car)=>(
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    return {
      carList: filteredList,
      name: form.name
    }
  })

  // function to handle delete
  const handleDelete = car => dispatch(removeCar(car.id))

  return (
    <div>
      {carList.map((car)=>{
        // checking if the name in the form is already present in the carlist so that we can bold it
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase()); //true or false
        return(
          <div key={car.id} >
            <p style={bold ? {fontWeight: "bold"} : {}} >{`Car Name: ${car.name}`}</p>
            <p>{`Cost $ ${car.cost}`}</p>
            <button
              onClick={()=>handleDelete(car)}
            >
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default CarList