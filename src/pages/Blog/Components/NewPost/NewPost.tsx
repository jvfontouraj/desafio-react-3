import { NewPostContainer } from './NewPost.style'

export function NewPost() {
  return (
    <NewPostContainer>
      <div>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" />
    </NewPostContainer>
  )
}
