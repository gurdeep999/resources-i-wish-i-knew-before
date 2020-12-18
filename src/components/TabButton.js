import React from 'react'

const TabButton = ({ category, setTab }) => {
  const handleClick = (e) => {
    setTab(e.target.innerText)
  }
  return (
    <button
      className="tab-item"
      onClick={handleClick}>{category}</button>
  )
}

export default TabButton