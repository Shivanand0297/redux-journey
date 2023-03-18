import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"

const CarSearch = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector((state)=>{
    return state.cars.searchTerm;
  })

  const handleSearchChange = (e) =>{
    dispatch(changeSearchTerm(e.target.value))  //changing the search term
  }

  return (
    <div>
      <h3>My Cars</h3>
      <label htmlFor="search">Search</label>
      <input 
        type="text"
        id="search" 
        onChange={handleSearchChange}
        value={searchValue}
      />
    </div>
  )
}

export default CarSearch