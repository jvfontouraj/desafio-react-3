import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import {
  PostProfileContainer,
  PostProfileHeader,
  PostProfileInfo,
} from './PostProfile.style'

export function PostProfile() {
  return (
    <PostProfileContainer>
      <PostProfileHeader>
        <div>
          <CaretLeft />
          <span>
            <a href="/">Voltar</a>
          </span>
        </div>
        <div>
          <span>
            <a href="https://github.com">Ver no Github</a>
          </span>
          <ArrowSquareUpRight />
        </div>
      </PostProfileHeader>
      <h2>JavaScript data types and data structures</h2>
      <PostProfileInfo>
        <div>
          <GithubLogo weight="fill" size={16} color="#3A536B" />
          <span>cameronwll</span>
        </div>
        <div>
          <CalendarBlank weight="fill" size={16} color="#3A536B" />
          <span>Há 1 dia</span>
        </div>
        <div>
          <ChatCircle weight="fill" size={16} color="#3A536B" />
          <span>5 comentários</span>
        </div>
      </PostProfileInfo>
    </PostProfileContainer>
  )
}
