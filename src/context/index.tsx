import { ReactNode, createContext, useState, useContext } from "react"

const AppContext = createContext<{
  showCustomTheme: boolean
  setShowCustomTheme: (show: boolean) => void
} | undefined>(undefined)


AppContext.displayName = 'AppContext'

export const AppProvider = ({ children }: {children: ReactNode}) => {
  const [showCustomTheme, setShowCustomTheme] = useState(false)

  return <AppContext.Provider children={children} value={{showCustomTheme, setShowCustomTheme}} />
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
      throw new Error('useAppContext必须在AppProvider中使用')
  }
  return context
}