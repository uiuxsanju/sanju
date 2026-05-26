import { Toaster } from "sonner"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Products from "./components/Products"
import Gallery from "./components/Gallery"
import WhyChoose from "./components/WhyChoose"
import SignatureSection from "./components/SignatureSection"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import InstagramFeed from "./components/InstagramFeed"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: "#F8F5EF" }}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "inherit",
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Clients />
        <WhyChoose />
        <Gallery />
        <SignatureSection />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
