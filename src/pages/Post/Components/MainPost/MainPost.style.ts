import styled from 'styled-components'

export const MainPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  line-height: 160%;

  strong {
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  div {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 2px;
    background-color: ${(props) => props.theme['base-post']};
  }
`
