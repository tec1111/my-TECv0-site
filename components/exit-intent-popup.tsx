"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Get from localStorage to prevent showing the popup again if user has already seen it
    const hasSeenPopup = localStorage.getItem("hasSeenExitPopup")
    if (hasSeenPopup) return

    let timeout: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger once and if mouse leaves the top of the page
      if (e.clientY <= 5 && !hasTriggered) {
        // Slight delay to ensure it's an actual exit intent
        timeout = setTimeout(() => {
          setIsOpen(true)
          setHasTriggered(true)
          // Set local storage so we don't show it again in this session
          localStorage.setItem("hasSeenExitPopup", "true")
        }, 300)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    // Also trigger after 40 seconds as a fallback
    const exitTimer = setTimeout(() => {
      if (!hasTriggered) {
        setIsOpen(true)
        setHasTriggered(true)
        localStorage.setItem("hasSeenExitPopup", "true")
      }
    }, 40000)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timeout)
      clearTimeout(exitTimer)
    }
  }, [hasTriggered])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would normally be handled here
    setIsSubmitted(true)
    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-white bg-black/20 rounded-full p-1 z-10 hover:bg-black/30 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
              <Image
                src="/images/couple-formal.png"
                alt="The Entrepreneur Couple"
                width={275}
                height={550}
                className="object-cover h-full w-full"
              />
            </div>

            <div className="p-6 md:p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">Wait! Before You Go...</h3>
                    <p className="text-gray-700">
                      Get our free guide:{" "}
                      <span className="font-semibold text-[#de1126]">
                        "10 Communication Secrets of 7-Figure Entrepreneur Couples"
                      </span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#de1126] hover:bg-[#de1126]/90">
                      Get Free Guide
                    </Button>
                  </form>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-700">Check your email for your free guide.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

