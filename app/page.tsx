import Image from 'next/image'
import Header from './components/header'
import Features from './components/features'
import CTABooking from './components/ctaBooking'
import PerformanceBanner from './components/performance/performance'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <Header />
    <Features />
    <CTABooking />
    <PerformanceBanner />
    <Footer />
    </>
  )
}
