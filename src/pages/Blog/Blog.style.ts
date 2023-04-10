import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }
`

export const BlogContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 54rem;
`

export const PostsSection = styled.section`
  margin-top: 3rem;
  margin-bottom: 14rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
