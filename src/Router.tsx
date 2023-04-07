import { Routes, Route } from 'react-router-dom'
import { Blog } from './pages/Blog/Blog'
import { Post } from './pages/Post/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  )
}
