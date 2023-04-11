import { useForm } from 'react-hook-form'
import { SearchPostContainer } from './SearchPost.style'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../Contexts/Context'

interface FormType {
  inputValue: string | ''
}

export function SearchPost() {
  const { searchInput, setSearchInput } = useContext(UserContext)

  const { register, watch } = useForm<FormType>()
  // const { onChange } = register('inputValue')

  // register('inputValue', {
  //   onChange: (e) => console.log(e),
  // })

  function handleInputChange(el: string) {
    setSearchInput(el)
  }
  // useEffect(() => {
  //   return setSearchInput(watch('inputValue'))
  // })
  // console.log(searchInput)

  return (
    <SearchPostContainer>
      <div>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('inputValue', {
          onChange: (el) => handleInputChange(el),
        })}
      />
      <p>Value of input: {searchInput}</p>
    </SearchPostContainer>
  )
}
