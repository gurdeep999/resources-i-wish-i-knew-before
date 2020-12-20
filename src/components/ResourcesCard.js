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
      <p className="resources__item-rating">{resource.rating}/5</p>
      <a className="resources__item-link__item" href={resource.link} rel="noreferrer" target="_blank"><button className="arrow-button">Go to Site<span className="arrow"></span>
</button></a>
        <div className="seperator"></div>
    </div >
  )
}

export default ResourceCard