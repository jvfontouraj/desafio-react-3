import { BlogContainer, BlogContentContainer, PostsSection } from './Blog.style'
import { NewPost } from './Components/NewPost/NewPost'
import { Posts } from './Components/Posts/Posts'
import { Profile } from './Components/Profile/Profile'
import Cover from '../../assets/cover.svg'

export function Blog() {
  return (
    <BlogContainer>
      <img src={Cover} alt="" />
      <BlogContentContainer>
        <Profile />
        <NewPost />
        <PostsSection>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </PostsSection>
      </BlogContentContainer>
    </BlogContainer>
  )
}
