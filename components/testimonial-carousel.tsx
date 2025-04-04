"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
  hasVideo?: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James & Michelle",
    role: "CWA Members since 2023",
    quote:
      "Working with Domonique and Felicia changed everything for us. We went from constant arguments about money to building a 6-figure business together while actually enjoying the process.",
    image: "/images/couple-casual.png",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Robert & Sarah",
    role: "CWA Members since 2022",
    quote:
      "The CEO Couple framework helped us align our vision and purpose. We've tripled our income in just 8 months while spending more quality time together.",
    image: "/images/couple-formal.png",
    hasVideo: true,
  },
  {
    id: 3,
    name: "Marcus & Jasmine",
    role: "CWA Members since 2023",
    quote:
      "We were skeptical at first, but the results speak for themselves. Our relationship is stronger than ever and our business is thriving. The community support is incredible!",
    image: "/images/couple-casual.png",
  },
  {
    id: 4,
    name: "David & Lisa",
    role: "CWA Members since 2021",
    quote:
      "Learning how to turn conflict into cashflow was a game-changer for our relationship and business. We've never been more aligned and productive.",
    image: "/images/couple-formal.png",
  },
  {
    id: 5,
    name: "Alex & Taylor",
    role: "CWA Members since 2022",
    quote:
      "The strategies we learned helped us scale our business from 5 to 6 figures while working less hours. Our work-life balance has never been better.",
    image: "/images/couple-casual.png",
    hasVideo: true,
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  // Reset the autoplay timer when manually changing slides
  const handleManualNavigation = (callback: () => void) => {
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current)
    }

    callback()

    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = setTimeout(nextSlide, 5000)
    }
  }

  // Setup autoplay
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimeoutRef.current = setTimeout(nextSlide, 5000)
    }

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current)
      }
    }
  }, [activeIndex, isAutoPlaying])

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-white to-transparent h-20 pointer-events-none"></div>

      {/* Testimonial Slides */}
      <div className="relative min-h-[500px]">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-opacity duration-500 p-8 rounded-xl 
              ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 -z-10"}`}
          >
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-md h-full flex flex-col">
              <div className="flex items-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic text-xl mb-8 flex-grow">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                  {testimonial.hasVideo && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[800px] max-h-[80vh] p-0 bg-black">
                        <div className="aspect-video w-full bg-black flex items-center justify-center text-white">
                          <div className="text-center p-8">
                            <Play className="h-16 w-16 mx-auto mb-4" />
                            <p className="text-xl">Video testimonial would play here</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-50"
        onClick={() => handleManualNavigation(prevSlide)}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200 hover:bg-gray-50"
        onClick={() => handleManualNavigation(nextSlide)}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => goToSlide(index))}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-[#de1126]" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

