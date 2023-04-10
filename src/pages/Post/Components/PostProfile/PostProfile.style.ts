import styled from 'styled-components'

export const PostProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-profile']};
  padding: 2rem;
  margin-top: -5.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  width: 54rem;
  height: 10.5rem;
`
export const PostProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  div {
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    font-weight: 700;
    border-bottom: 1px solid transparent;
    transition: all 0.3s;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`
export const PostProfileInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  div {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-label']};
    span {
      margin-left: 0.5rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
