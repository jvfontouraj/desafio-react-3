import styled from 'styled-components'

export const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }

  input[type='text'] {
    flex: 1;
    color: ${(props) => props.theme['base-span']};
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    height: 10rem;
    padding: 12px 1rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input[type='text']:focus {
    border: 1px solid ${(props) => props.theme.blue};
    color: ${(props) => props.theme['base-text']};
    box-shadow: none;
  }
`
