import { MainPostContainer } from './MainPost.style'

export function MainPost() {
  return (
    <MainPostContainer>
      <p>
        <strong>
          Programming languages all have built-in data structures, but these
          often differ from one language to another.
        </strong>
        This article attempts to list the built-in data structures available in
        JavaScript and what properties they have. These can be used to build
        other data structures. Wherever possible, comparisons with other
        languages are drawn.
        <br />
        <br />
        <span>Dynamic typing</span>
        <br />
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </p>

      <div>
        <p>
          let foo = 42; // foo is now a number <br />
          foo = ‘bar’; // foo is now a <br />
          string foo = true; // foo is now a boolean
        </p>
      </div>
    </MainPostContainer>
  )
}
