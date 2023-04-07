import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
} from './Profile.styles'
import ProfilePic from '../../../../assets/avatar.svg'
import { ArrowSquareUpRight, Buildings, GithubLogo, User } from 'phosphor-react'

export function Profile() {
  return (
    <ProfileContainer>
      <img src={ProfilePic} alt="" />
      <ProfileContent>
        <ProfileHeader>
          <h1>Cameron Williamson</h1>
          <div>
            <span>
              <a href="https://github.com">Github</a>
            </span>
            <ArrowSquareUpRight />
          </div>
        </ProfileHeader>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ProfileInfo>
          <div>
            <GithubLogo />
            <span>cameronwll</span>
          </div>
          <div>
            <Buildings />
            <span>Rocketseat</span>
          </div>
          <div>
            <User />
            <span>32 seguidores</span>
          </div>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
