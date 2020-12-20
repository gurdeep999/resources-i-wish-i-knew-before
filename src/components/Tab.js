import React from 'react'
import TabButton from './TabButton'

let categories = ['All','html','css','vanillaJS','ReactJS','fullStack','DOCS','API','misc']

const Tab = ({ setTab }) => {

  return (
    <div className="tab">
      {
        categories.map((c,i)=>{
          return (
            <TabButton 
            key={i}
            category={c}
            setTab = {setTab} />
          )
        })
      }
    </div>
  )
}

export default Tab