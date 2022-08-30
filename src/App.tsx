import { useState } from "react"
import { CustomTheme } from "./components/custom-theme/custom-theme"
import { Main } from "./components/main/main"
import { Nav } from "./components/nav/nav"
import { useAppContext } from "./context"

function App() {
  const { showCustomTheme } = useAppContext()

  return (
    <div className="App">
      <Nav/>
      <Main/>
      {showCustomTheme ? <CustomTheme/> : null}
    </div>
  )
}

export default App
