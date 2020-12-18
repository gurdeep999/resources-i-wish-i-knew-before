import React from 'react'

const ResourceCard = ({ resource }) => {
  return (
    <div className="resources__item">
      {/* <div className="resources__item-img"><img alt={resource.title} src={resource.image}></img></div> */}
      <div className="resources__item-title">{resource.title}</div>
    

      
      <ul className="resources__item-tags">{resource.tag.map(
        (t, i) => (
          <li className="resources__item-tags__item" key={i}>{t}</li>
        )
      )}</ul>

      <div className="resources__item-link">
        <a className="resources__item-link__item" href={resource.link}>Go to Site</a>
        </div>
        <div className="seperator"></div>
    </div>
  )
}

export default ResourceCard