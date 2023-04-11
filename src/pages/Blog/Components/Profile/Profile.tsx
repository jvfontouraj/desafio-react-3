import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './Profile.style'
import { ArrowSquareUpRight, Buildings, GithubLogo, User } from 'phosphor-react'
import { useContext } from 'react'
import { UserContext } from '../../../../Contexts/Context'

export function Profile() {
  const { userData } = useContext(UserContext)

  return (
    <ProfileContainer>
      <img src={userData.avatar_url} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <h1>{userData.name}</h1>
          <div>
            <span>
              <a href={userData.html_url} target="blank">
                Github
              </a>
            </span>
            <ArrowSquareUpRight />
          </div>
        </ProfileHeader>
        <p>
          {userData.bio} {userData.bio}
        </p>
        <ProfileInfo>
          <div>
            <GithubLogo size={16} color="#3A536B" weight="fill" />
            <span>{userData.login}</span>
          </div>
          <div>
            <Buildings size={16} color="#3A536B" weight="fill" />
            <span>{userData.company}</span>
          </div>
          <div>
            <User size={16} color="#3A536B" weight="fill" />
            <span>{userData.followers} seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
