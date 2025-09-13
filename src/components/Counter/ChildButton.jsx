import React from "react"

export const ChildButton = React.memo(({onClick, label}) => {
    console.log(label);
  return (
    <button onClick={onClick}>{label}</button>
  )
})  
