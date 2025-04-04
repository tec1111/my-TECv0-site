"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col pt-16">
        <div className="px-2">
          <Image src="/images/tec-logo.png" alt="The Entrepreneur Couple" width={150} height={50} className="mb-8" />
        </div>
        <nav className="flex flex-col gap-5 px-2">
          <NavLink href="#about" onClick={() => setOpen(false)}>
            About Us
          </NavLink>
          <NavLink href="#ceo-couple" onClick={() => setOpen(false)}>
            CEO Couple
          </NavLink>
          <NavLink href="#services" onClick={() => setOpen(false)}>
            How We Help
          </NavLink>
          <NavLink href="#media" onClick={() => setOpen(false)}>
            Media
          </NavLink>
          <NavLink href="#testimonials" onClick={() => setOpen(false)}>
            Testimonials
          </NavLink>
          <NavLink href="#book" onClick={() => setOpen(false)}>
            Our Book
          </NavLink>
          <NavLink href="#faq" onClick={() => setOpen(false)}>
            FAQ
          </NavLink>
          <NavLink href="#blog" onClick={() => setOpen(false)}>
            Blog
          </NavLink>
          <NavLink href="#contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
        <div className="mt-auto pt-8 px-2">
          <Button className="w-full bg-[#de1126] hover:bg-[#de1126]/90 mb-4">Work With Us</Button>
          <Button variant="outline" className="w-full">
            Listen to Our Podcast
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface NavLinkProps {
  href: string
  onClick?: () => void
  children: React.ReactNode
}

function NavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-lg font-medium transition-colors hover:text-[#de1126] py-2 border-b border-gray-100"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

