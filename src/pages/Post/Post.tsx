import { PostContainer, PostContentContainer } from './Post.style'
import Cover from '../../assets/cover.svg'
import { PostProfile } from './Components/PostProfile/PostProfile'
import { MainPost } from './Components/MainPost/MainPost'

export function Post() {
  return (
    <PostContainer>
      <img src={Cover} alt="" />
      <PostContentContainer>
        <PostProfile />
        <MainPost />
      </PostContentContainer>
    </PostContainer>
  )
}
