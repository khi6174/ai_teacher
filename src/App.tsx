import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from './components/AppShell'
import { HistoryPage } from './pages/HistoryPage'
import { HomePage } from './pages/HomePage'
import { LearnPage } from './pages/LearnPage'
import { QuizPage } from './pages/QuizPage'
import { ReviewPage } from './pages/ReviewPage'
import { ResultPage } from './pages/ResultPage'
import { RoadmapPage } from './pages/RoadmapPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/learn/:setId" element={<LearnPage />} />
          <Route path="/quiz/:setId" element={<QuizPage />} />
          <Route path="/review/:setId" element={<ReviewPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
