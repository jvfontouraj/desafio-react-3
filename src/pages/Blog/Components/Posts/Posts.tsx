import { UserContext } from '../../../../Contexts/Context'
import { PostsContainer } from './Posts.style'
import { useContext } from 'react'

export function Posts() {
  const { searchResult } = useContext(UserContext)

  return (
    <>
      {searchResult.map((item: any) => {
        return (
          <PostsContainer key={item.number}>
            <div>
              <h3>{item.title}</h3>
              <span>Há 1 dia</span>
            </div>
            <p>{item.body}</p>
          </PostsContainer>
        )
      })}
    </>
  )
}
