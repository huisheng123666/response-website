import { useState } from "react"
import { CustomTheme } from "./components/custom-theme/custom-theme"
import { Main } from "./components/main/main"
import { Nav } from "./components/nav/nav"

function App() {
  const [showTheme, setShowheme] = useState(false)

  return (
    <div className="App">
      <Nav/>
      <Main/>
      {showTheme ? <CustomTheme/> : null}
    </div>
  )
}

export default App
