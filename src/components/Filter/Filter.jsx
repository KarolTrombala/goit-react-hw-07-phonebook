import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from 'redux/filterSlice'
import { selectFilter } from 'redux/selectors'

export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  const handleInputChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={handleInputChange}
      />
    </div>
  )
};
