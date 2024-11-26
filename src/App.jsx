import ComparisonTable from "./sections/ComparisonTable"
import FAQ from "./sections/FAQ"
import { Feature } from "./sections/Feature"
import { Footer } from "./sections/Footer"
import { Header } from "./sections/Header"
import HeroSection from "./sections/Hero"

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <ComparisonTable />
      <Feature />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
