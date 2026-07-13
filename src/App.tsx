import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import PageSkeleton from './components/PageSkeleton'
import Home from './pages/Home'

// Code-split the rest of the pages — each becomes its own chunk loaded on demand
const About = lazy(() => import('./pages/About'))
const Companies = lazy(() => import('./pages/Companies'))
const ValueChain = lazy(() => import('./pages/ValueChain'))
const Sustainability = lazy(() => import('./pages/Sustainability'))
const News = lazy(() => import('./pages/News'))
const NewsArticle = lazy(() => import('./pages/NewsArticle'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const FAQ = lazy(() => import('./pages/FAQ'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/value-chain" element={<ValueChain />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsArticle />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
