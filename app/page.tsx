import Header from "./components/Header"
import Hero from "./components/Hero"
import PhotoGallery from "./components/PhotoGallery"
import AboutUs from "./components/AboutUs"
import FeaturedProjects from "./components/FeaturedProjects"
import DonationSection from "./components/DonationSection"
import FacebookShowcase from "./components/FacebookShowcase"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PhotoGallery />
      <AboutUs />
      <FeaturedProjects />
      <DonationSection />
      <FacebookShowcase />
      <Footer />
    </div>
  )
}

