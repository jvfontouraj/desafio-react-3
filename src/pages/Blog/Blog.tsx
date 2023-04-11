import { BlogContainer, BlogContentContainer, PostsSection } from './Blog.style'
import { SearchPost } from './Components/SearchPost/SearchPost'
import { Posts } from './Components/Posts/Posts'
import { Profile } from './Components/Profile/Profile'
import Cover from '../../assets/cover.svg'

export function Blog() {
  return (
    <BlogContainer>
      <img src={Cover} alt="" />
      <BlogContentContainer>
        <Profile />
        <SearchPost />
        <PostsSection>
          <Posts />
        </PostsSection>
      </BlogContentContainer>
    </BlogContainer>
  )
}
