import React, { useState } from "react"
import Header from "./Header"
import Post from "./Post"

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50 },
  ])

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState, 
      {
      id: Math.random(),
      title: `Title#0${prevState.length + 1}`,
      subtitle: `Sub#0${prevState.length + 1}`,
      likes: 50
      },
    ])
  }

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          likes={post.likes}
          title={post.title}
          subtitle={post.subtitle}
        />
      ))}
    </>
  )
}

export default App