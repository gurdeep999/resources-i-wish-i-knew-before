import React, { useEffect, useState } from 'react'
import { shuffle } from '../utils/utilities';
import ResourceCard from './ResourcesCard';

const Resources = ({ resources, activeTab }) => {
  const [shuffledResources, setShuffledResources] = useState([])

  useEffect(() => {
    setShuffledResources(shuffle(resources))
  }, [resources])

  return (
    <div className="resources">
      {
        shuffledResources.filter(r => {
          if (activeTab === 'All') {
            return true
          }
          return r.tag.some(t =>
            t.toLowerCase() === activeTab.toLowerCase()
          );
        }).map((r, i) => {
          return (
            <ResourceCard
              key={i}
              resource={r}
            />
          )
        })
      }
    </div>
  )
}

export default Resources