"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 1000px and if not dismissed
      if (window.scrollY > 1000 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const dismiss = () => {
    setIsDismissed(true)
    // Reset the dismissed state after 30 minutes
    setTimeout(() => setIsDismissed(false), 30 * 60 * 1000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 pointer-events-none">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200 p-4 flex items-center justify-between pointer-events-auto animate-slide-up">
        <div className="flex items-center">
          <Calendar className="h-10 w-10 text-[#de1126] mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-lg">Ready to become a CEO Couple?</h4>
            <p className="text-sm text-gray-600">Book your free strategy call now</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#de1126] hover:bg-[#de1126]/90 whitespace-nowrap">Book Call</Button>
          <button onClick={dismiss} className="text-gray-500 hover:text-gray-700 p-1" aria-label="Dismiss">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

