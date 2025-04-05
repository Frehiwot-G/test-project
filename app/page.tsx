import Header from "@/components/layout/Header"
import { CarouselPlugin } from "@/components/landing/CarouselPlugin"

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <CarouselPlugin />
      </div>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Heading - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome To Your <span className="text-orange-500">Virtual Office</span>
        </h1>
      </div>




      {/* CTA Buttons - Bottom Center */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-4 px-4">
        <button className="bg-orange-500 text-white px-6 py-3 rounded shadow hover:bg-orange-600 transition">
          Instant Demo
        </button>
        <button className="border border-white  text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
          Setup Your Company
        </button>
      </div>

      {/* Footer Links - Bottom Corners */}
      <div className="absolute bottom-4 left-4 text-xs text-white/70 z-20">
        Term & Conditions
      </div>
      <div className="absolute bottom-4 right-4 text-xs text-white/70 z-20">
        Privacy Policy
      </div>
    </main>
  )
}
