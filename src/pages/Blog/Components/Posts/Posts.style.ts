import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 26rem;
  height: 16.25rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.3s;

  :hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
      max-width: 17rem;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`
