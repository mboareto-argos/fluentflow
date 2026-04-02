import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useProgressStore } from './store/progressStore'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import FlashcardSession from './pages/FlashcardSession'
import Categories from './pages/Categories'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import Onboarding from './pages/Onboarding'

export default function App() {
  const userName = useProgressStore(s => s.userName)

  if (!userName) {
    return <Onboarding />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="flashcards" element={<FlashcardSession />} />
          <Route path="flashcards/:categoryId" element={<FlashcardSession />} />
          <Route path="categories" element={<Categories />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
