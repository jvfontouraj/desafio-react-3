import React, { useEffect, useState } from 'react'

export interface SearchDataTypes {
  number: number
  tittle: string
  body: string
}

export interface UserDataTypes {
  login: string
  html_url: string
  avatar_url: string
  name: string
  bio: string
  company: string
  followers: number
}

interface UserContextType {
  userData: UserDataTypes
  searchInput: string
  searchResult: SearchDataTypes[]
  handleInputChange: (el: any) => void
}

export const UserContext = React.createContext({
  userData: {} as UserDataTypes,
  searchInput: '',
  searchResult: [],
  handleInputChange: () => {},
} as UserContextType)

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
  }, [defaultUserName])

  useEffect(() => {
    const searchIssue = async (input: string) => {
      const response = await fetch(
        `https://api.github.com/search/issues?q=repo:jvfontouraj/desafio-react-3%20${input}`,
      )
      const jsonData = await response.json()

      setSearchResult(jsonData.items)
    }
    searchIssue(searchInput)
  }, [searchInput])

  console.log(searchResult)

  function handleInputChange(el: any) {
    setSearchInput(el)
  }

  return (
    <UserContext.Provider
      value={{ userData, searchResult, searchInput, handleInputChange }}
    >
      {children}
    </UserContext.Provider>
  )
}
