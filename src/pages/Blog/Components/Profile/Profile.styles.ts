import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  background: ${(props) => props.theme['base-profile']};
  padding: 2.5rem 2rem;
  gap: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
  }

  div {
    color: ${(props) => props.theme.blue};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
  }

  span {
    margin-right: 0.5rem;
  }
`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  div {
    color: ${(props) => props.theme['base-label']};
    span {
      margin-left: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
