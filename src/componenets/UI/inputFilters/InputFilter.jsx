import React from 'react'
import stl from '../inputFilters/InputFilter'
function InputFilter({ name, placehold }) {
  return (
    <input type="number"  placeholder={placehold} name={name} />
  )
}

export default InputFilter
