import React from 'react'

const TabButton = ({ category, setTab }) => {
  const handleClick = (e) => {
    setTab(e.target.innerText)
    document.querySelectorAll('.tab-item').forEach(n=>n.classList.remove('tab-item--active'))
    e.target.classList.add('tab-item--active')
  }
  return (
    <button
      className="tab-item"
      onClick={handleClick}>{category}</button>
  )
}

export default TabButton