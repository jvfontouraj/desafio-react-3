import React, { useEffect, useState } from 'react'

interface UserContextType {
  userData: any
  setUserData: (userData: string) => void
  searchInput: string
  setSearchInput: (searchInput: string) => void
}

export const UserContext = React.createContext({} as UserContextType)

interface UserContextProps {
  children: React.ReactNode
}

export function UserContextProvider({ children }: UserContextProps) {
  const [userData, setUserData] = useState<any>({})

  const [searchInput, setSearchInput] = useState<string>('')
  const [searchResult, setSearchResult] = useState<any>([])

  const defaultUserName = 'jvfontouraj'

  useEffect(() => {
    const loadUser = async (userName: string) => {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      const jsonData = await response.json()

      setUserData(jsonData)
    }
    loadUser(defaultUserName)
  }, [])

  useEffect(() => {
    const searchIssue = async (searchInput: string) => {
      const response = await fetch(
        `https://api.github.com/search/issues?q=user:${defaultUserName}%20${searchInput}`,
      )
      const jsonData = await response.json()

      setSearchResult(jsonData)
    }
    searchIssue(searchInput)
  }, [searchInput])

  console.log(searchResult)

  return (
    <UserContext.Provider
      value={{ userData, setUserData, searchInput, setSearchInput }}
    >
      {children}
    </UserContext.Provider>
  )
}
