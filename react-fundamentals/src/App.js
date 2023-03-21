import React from "react"
import Header from "./Header"
import Post from "./Post"

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post likes={20} title="Título notícia 1" subtitle="Subtítulo notícia 1"/>
      <Post likes={10} title="Título notícia 2" subtitle="Subtítulo notícia 2"/>
      <Post likes={34} title="Título notícia 3" subtitle="Subtítulo notícia 3"/>
      <Post likes={22} title="Título notícia 4" subtitle="Subtítulo notícia 4"/>
    </>
  )
}

export default App