import { SearchPostContainer } from './SearchPost.style'
import { useContext } from 'react'
import { UserContext } from '../../../../Contexts/Context'

export function SearchPost() {
  const { searchInput, handleInputChange } = useContext(UserContext)

  return (
    <SearchPostContainer>
      <div>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        onChange={(e) => {
          handleInputChange(e.target.value)
        }}
      />
      <p>Value of input: {searchInput}</p>
    </SearchPostContainer>
  )
}
