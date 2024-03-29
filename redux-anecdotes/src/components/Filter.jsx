import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        const content = event.target.value
        dispatch(filterChange(content))
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            Filter
            <input type='text' name='filter' onChange={handleChange} />
        </div>
    )
  }
  
  export default Filter