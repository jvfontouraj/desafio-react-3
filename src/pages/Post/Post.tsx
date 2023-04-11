import { PostContainer, PostContentContainer } from './Post.style'
import Cover from '../../assets/cover.svg'
import { MainPostContainer } from './MainPost.style'
import {
  PostProfileContainer,
  PostProfileHeader,
  PostProfileInfo,
} from './PostProfile.style'
import {
  ArrowSquareUpRight,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/Context'

export function Post() {
  const { userData } = useContext(UserContext)

  return (
    <PostContainer>
      <img src={Cover} alt="" />
      <PostContentContainer>
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
                <a href={userData.html_url} target="blank">
                  Ver no Github
                </a>
              </span>
              <ArrowSquareUpRight />
            </div>
          </PostProfileHeader>
          <h2>JavaScript data types and data structures</h2>
          <PostProfileInfo>
            <div>
              <GithubLogo weight="fill" size={16} color="#3A536B" />
              <span>{userData.login}</span>
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
        <MainPostContainer>
          <p>
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
            <br />
            <br />
            <span>Dynamic typing</span>
            <br />
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>

          <div>
            <p>
              let foo = 42; // foo is now a number <br />
              foo = ‘bar’; // foo is now a <br />
              string foo = true; // foo is now a boolean
            </p>
          </div>
        </MainPostContainer>{' '}
      </PostContentContainer>
    </PostContainer>
  )
}
