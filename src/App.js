import React, { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Resources from "./components/Resources"
import Tab from "./components/Tab"

const App = () => {
  const [resources, setResources] = useState([])
  const [activeTab, setTab] = useState("All")
  console.log(activeTab)

  const fetchResources = async () => {
    let localResources = window.localStorage.getItem("MyResources")
    if (localResources) {
      return JSON.parse(localResources)
    } else {
      let response = await fetch(
        "https://radiant-precept-290311-default-rtdb.firebaseio.com/temp/api/resources.json"
      )
      let data = await response.json()
      window.localStorage.setItem("MyResources", JSON.stringify(data))
      return data
    }
  }

  useEffect(() => {
    fetchResources().then((data) => {
      setResources(data)
    })
  }, [])

  console.log(resources)
  return (
    <div className="main">
      <nav className="header">
        <h2 className="brand">Resources I wish I knew before</h2>
        <div className="header-links">
          <div className="header-links__item">
            HOME
          </div>
          <div className="header-links__item">
            ADD RESOURCES
          </div>
        </div>
      </nav>
      <div className="main__content">
        <div className="main__content-data">
          <Tab
            resources={resources}
            setTab={setTab} />
          <Resources
            resources={resources}
            activeTab={activeTab} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
