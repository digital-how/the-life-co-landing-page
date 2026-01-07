"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface MenuContextType {
  isMainMenuOpen: boolean
  setIsMainMenuOpen: (open: boolean) => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false)

  return <MenuContext.Provider value={{ isMainMenuOpen, setIsMainMenuOpen }}>{children}</MenuContext.Provider>
}

export function useMenu() {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider")
  }
  return context
}
