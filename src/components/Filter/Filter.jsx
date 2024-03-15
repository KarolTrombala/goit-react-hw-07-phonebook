import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilter } from '../../redux/filterSlice'

export const Filter = () => {
  const dispatch = useDispatch()

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