import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Headphones,
  ArrowRight,
  BookOpen,
  Heart,
  PlayCircle,
  PieChart,
  Award,
  Users,
} from "lucide-react"

import { MobileNav } from "@/components/mobile-nav"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FaqSection } from "@/components/faq-section"
import { BlogPreview } from "@/components/blog-preview"
import { StickyCta } from "@/components/sticky-cta"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { LeadMagnet } from "@/components/lead-magnet"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/tec-logo.png"
              alt="The Entrepreneur Couple"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              About Us
            </Link>
            <Link href="#ceo-couple" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              CEO Couple
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              How We Help
            </Link>
            <Link href="#media" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              Media
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              Testimonials
            </Link>
            <Link href="#book" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              Our Book
            </Link>
            <Link href="#faq" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              FAQ
            </Link>
            <Link href="#blog" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-[#de1126]">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-[#de1126] hover:bg-[#de1126]/90 hidden md:inline-flex">Work With Us</Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0">
            {/* This would be where the video background would go */}
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/couple-formal.png')" }}
            >
              {/* Video thumbnail overlay with play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10 md:pointer-events-auto pointer-events-none opacity-0 md:opacity-80 group-hover:opacity-100 transition-opacity">
                <button className="h-20 w-20 flex items-center justify-center rounded-full bg-[#de1126]/90 text-white">
                  <PlayCircle className="h-12 w-12" />
                </button>
              </div>
            </div>
          </div>
          <div className="container relative z-20 flex flex-col items-center justify-center h-[90vh] text-center text-white space-y-6">
            <div className="inline-block px-6 py-2 rounded-full bg-[#de1126] font-medium text-sm md:text-base mb-2 animate-fade-in-down">
              THE ENTREPRENEUR COUPLE
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight animate-fade-in">
              Building a Business Together <br className="hidden md:inline" /> Should Bring You Closer
            </h1>
            <p className="max-w-[800px] text-lg sm:text-xl md:text-2xl animate-fade-in-up">
              Let's be real: Balancing love and business isn't easy. <br className="hidden md:inline" />
              But it doesn't have to be this hard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up delay-300">
              <Button size="lg" className="bg-[#de1126] hover:bg-[#de1126]/90 text-white text-lg">
                Become a CEO Couple
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-lg"
              >
                Listen to Our Podcast
              </Button>
            </div>

            {/* Stats display for social proof */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20 w-full max-w-4xl">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">500+</div>
                <div className="text-sm uppercase tracking-wide text-gray-200">Couples Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">$9.8M</div>
                <div className="text-sm uppercase tracking-wide text-gray-200">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">85%</div>
                <div className="text-sm uppercase tracking-wide text-gray-200">Relationship Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection>
          <section id="about" className="py-20 bg-white">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/images/couple-casual.png"
                    alt="Domonique and Felicia"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                    Who We Are
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">We've Been Where You Are</h2>
                  <p className="text-lg text-gray-700">
                    We're Domonique and Felicia, The Entrepreneur Couple. We've been through the fights, the financial
                    stress, and the overwhelm of trying to build a business while keeping our love alive and being
                    present parents to our 5 kids.
                  </p>
                  <p className="text-lg text-gray-700">
                    Once a nurse and a manager working 9-5s for close to a decade, we pivoted to network marketing and
                    then to digital entrepreneurship—a change that transformed our lives in the best way possible.
                  </p>
                  <p className="text-lg text-gray-700">
                    We've turned our experience into empires, and in the process, we've helped many build digital
                    wealth, create profitable brands, and multiply their income—without sacrificing their relationships
                    or peace of mind.
                  </p>
                  <div className="pt-4">
                    <Button className="bg-black hover:bg-black/80 text-white">
                      Our Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CEO Couple Section */}
        <AnimatedSection>
          <section id="ceo-couple" className="py-20 bg-gradient-to-r from-[#de1126]/5 to-black/5">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                  CEO COUPLE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Does It Mean To Be A CEO Couple?</h2>
                <p className="text-lg text-gray-700">Because when you win together, you win bigger.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-full bg-[#de1126] flex items-center justify-center mb-6 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Get Ish Done—Together</h3>
                  <p className="text-gray-700">
                    CEO Couples build businesses that change their family's future while creating unshakable habits that
                    strengthen their relationship, family, brand, and legacy.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-full bg-[#de1126] flex items-center justify-center mb-6 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Strive for Excellence</h3>
                  <p className="text-gray-700">
                    They're always striving to become the best version of themselves—as individuals and as a
                    team—whether that's aligning goals, diversifying income, or mastering the balance of love and
                    business.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-full bg-[#de1126] flex items-center justify-center mb-6 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">United Front</h3>
                  <p className="text-gray-700">
                    Their grit, determination, and ability to turn conflict into cashflow enable them to take calculated
                    risks that pay off BIG—for their business, family, and future.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center bg-black text-white p-8 md:p-12 rounded-xl transform transition-transform hover:scale-[1.01]">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">But What Does This Mean for YOU?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-[#de1126] flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">1</span>
                    </div>
                    <p>You don't have to choose between love and wealth.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-[#de1126] flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">2</span>
                    </div>
                    <p>You can build a business that thrives while your relationship grows stronger.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-10 w-10 rounded-full bg-[#de1126] flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold">3</span>
                    </div>
                    <p>You can create a legacy that lasts—together.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* How We Help Section */}
        <AnimatedSection>
          <section id="services" className="py-20 bg-white">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                  How We Help
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  We're on a Mission to Help Couples Become CEO Couples
                </h2>
                <p className="text-lg text-gray-700">
                  Through our Couple Wealth Academy (CWA), the #1 and 1st community that talks life and business for
                  couples.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="h-8 w-8 rounded-full bg-[#de1126] flex items-center justify-center mr-3 text-white">
                      1
                    </span>
                    Align Purpose & Vision
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Start by aligning your purpose and vision so you both can build a life and business you truly
                    love—together.
                  </p>
                  <Link href="#" className="text-[#de1126] font-medium inline-flex items-center group">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="h-8 w-8 rounded-full bg-[#de1126] flex items-center justify-center mr-3 text-white">
                      2
                    </span>
                    Turn Conflict into Clarity
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Transform common struggles into growth opportunities, creating harmony and understanding in both
                    your relationship and business.
                  </p>
                  <Link href="#" className="text-[#de1126] font-medium inline-flex items-center group">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="h-8 w-8 rounded-full bg-[#de1126] flex items-center justify-center mr-3 text-white">
                      3
                    </span>
                    Multiply Your Income
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Learn how to scale your income without sacrificing your relationship, family, or peace of mind.
                  </p>
                  <Link href="#" className="text-[#de1126] font-medium inline-flex items-center group">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="h-8 w-8 rounded-full bg-[#de1126] flex items-center justify-center mr-3 text-white">
                      4
                    </span>
                    Create Digital Wealth
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Build scalable online income streams and assets that work for you, giving you the financial freedom
                    you deserve.
                  </p>
                  <Link href="#" className="text-[#de1126] font-medium inline-flex items-center group">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="h-8 w-8 rounded-full bg-[#de1126] flex items-center justify-center mr-3 text-white">
                      5
                    </span>
                    Scale Your Business
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Implement systems, strategies, and teamwork to grow your business sustainably—without the burnout.
                  </p>
                  <Link href="#" className="text-[#de1126] font-medium inline-flex items-center group">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="h-8 w-8 rounded-full bg-[#de1126] flex items-center justify-center mr-3 text-white">
                      6
                    </span>
                    Build Profitable Brands
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Create brands that stand out and drive revenue while staying true to your values and vision.
                  </p>
                  <Link href="#" className="text-[#de1126] font-medium inline-flex items-center group">
                    Learn More{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Who We Help Section */}
        <AnimatedSection>
          <section className="py-20 bg-black text-white">
            <div className="container text-center space-y-12">
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126] font-medium text-sm">
                  Who We Help
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  9-5 Couples Who Want To Secure The Bag w/Bae
                </h2>
                <p className="text-lg text-gray-300">
                  We help couples who are ready to build wealth, create time freedom, and find peace—together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-[#de1126] flex items-center justify-center mb-6 mx-auto">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Couples Seeking Time Freedom</h3>
                  <p className="text-gray-300">
                    Tired of the 9-5 grind and missing quality time together, these couples want to build a business
                    that gives them control of their schedule.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-[#de1126] flex items-center justify-center mb-6 mx-auto">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Digital Entrepreneur Aspirants</h3>
                  <p className="text-gray-300">
                    Couples who want to leverage digital assets and online business models to create multiple income
                    streams and financial security.
                  </p>
                </div>
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors">
                  <div className="h-12 w-12 rounded-full bg-[#de1126] flex items-center justify-center mb-6 mx-auto">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Relationship-First Entrepreneurs</h3>
                  <p className="text-gray-300">
                    Couples who refuse to sacrifice their relationship for success and want to build a business that
                    strengthens their bond rather than strains it.
                  </p>
                </div>
              </div>

              {/* Social Proof Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-col items-center">
                  <PieChart className="h-8 w-8 mb-2 text-[#de1126]" />
                  <div className="text-3xl font-bold">92%</div>
                  <p className="text-sm text-gray-300">Income Increase</p>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="h-8 w-8 mb-2 text-[#de1126]" />
                  <div className="text-3xl font-bold">12+</div>
                  <p className="text-sm text-gray-300">Industry Awards</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-8 w-8 mb-2 text-[#de1126]" />
                  <div className="text-3xl font-bold">500+</div>
                  <p className="text-sm text-gray-300">Couples Mentored</p>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="h-8 w-8 mb-2 text-[#de1126]" />
                  <div className="text-3xl font-bold">85%</div>
                  <p className="text-sm text-gray-300">Relationship Improvement</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CWA Section */}
        <AnimatedSection>
          <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                    Couple Wealth Academy
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    The #1 Community for Entrepreneur Couples
                  </h2>
                  <p className="text-lg text-gray-700">
                    CWA is the first and only community that addresses both life and business for couples. We provide
                    the strategies, support, and systems you need to thrive together.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#de1126] flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Weekly coaching calls with Domonique & Felicia</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#de1126] flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Private community of like-minded couples</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#de1126] flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Step-by-step business building frameworks</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#de1126] flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Relationship-strengthening exercises and tools</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="bg-[#de1126] hover:bg-[#de1126]/90 text-white">Join CWA Today</Button>
                  </div>
                </div>
                <div>
                  <Image
                    src="/images/couple-formal.png"
                    alt="Couple Wealth Academy"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Media Section */}
        <AnimatedSection>
          <section id="media" className="py-20 bg-black text-white">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126] font-medium text-sm">Media</div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Catch Up With Our Latest Content</h2>
                <p className="text-lg text-gray-300">
                  Tune in to our podcast "LyBsyN" and YouTube channel for valuable insights, interviews, and practical
                  advice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Podcast */}
                <div className="space-y-6">
                  <div className="aspect-video relative rounded-xl overflow-hidden group">
                    <Image
                      src="/images/couple-casual.png"
                      alt="Latest Podcast Episode"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Headphones className="h-5 w-5 mr-2 text-[#de1126]" />
                          <span className="text-sm font-medium">Latest Episode</span>
                        </div>
                        <h3 className="text-xl font-bold">
                          How to Build a Business Without Sacrificing Your Relationship
                        </h3>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#de1126] hover:bg-[#de1126]/90">Listen to LyBsyN Podcast</Button>
                </div>

                {/* YouTube */}
                <div className="space-y-6">
                  <div className="aspect-video relative rounded-xl overflow-hidden group">
                    <Image
                      src="/images/couple-formal.png"
                      alt="Latest YouTube Video"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div>
                        <div className="flex items-center mb-2">
                          <Youtube className="h-5 w-5 mr-2 text-[#de1126]" />
                          <span className="text-sm font-medium">Latest Video</span>
                        </div>
                        <h3 className="text-xl font-bold">5 Ways to Turn Relationship Conflict into Business Growth</h3>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-[#de1126] hover:bg-[#de1126]/90">Watch on YouTube</Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <section id="testimonials" className="py-20 bg-white">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                  Success Stories
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Couples Say</h2>
                <p className="text-lg text-gray-700">
                  Hear from couples who have transformed their businesses and relationships with our help.
                </p>
              </div>

              <TestimonialCarousel />
            </div>
          </section>
        </AnimatedSection>

        {/* Book Section */}
        <AnimatedSection>
          <section id="book" className="py-20 bg-gradient-to-r from-[#de1126]/10 to-[#de1126]/5">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <Image
                    src="/images/secure-the-bag-logo.png"
                    alt="Secure The Bag w/Bae"
                    width={400}
                    height={500}
                    className="mx-auto transform transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                    Our Book
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Secure The Bag w/Bae: The Couple's Guide to Building Wealth Together
                  </h2>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                    <span className="text-sm font-medium ml-2">100+ Reviews</span>
                  </div>
                  <p className="text-lg text-gray-700">
                    In this practical guide, we share our proven framework for building wealth as a couple while
                    strengthening your relationship in the process.
                  </p>
                  <p className="text-lg text-gray-700">
                    Learn how to align your financial goals, create multiple income streams, and build a business that
                    supports your lifestyle—all while becoming a stronger team.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#de1126] hover:bg-[#de1126]/90 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" /> Get Your Copy on Amazon
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#de1126] text-[#de1126] hover:bg-[#de1126] hover:text-white"
                    >
                      Read Sample Chapter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Lead Magnet Section */}
        <AnimatedSection>
          <section className="py-20 bg-white">
            <div className="container">
              <LeadMagnet />
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <section id="faq" className="py-20 bg-gray-50">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                  Common Questions
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
                <p className="text-lg text-gray-700">
                  Get answers to some of the most common questions about working with us.
                </p>
              </div>

              <FaqSection />
            </div>
          </section>
        </AnimatedSection>

        {/* Blog Preview Section */}
        <AnimatedSection>
          <section id="blog" className="py-20 bg-white">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                  Latest From Our Blog
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Insights for Entrepreneur Couples</h2>
                <p className="text-lg text-gray-700">
                  Practical advice and strategies to help you build a thriving business and relationship.
                </p>
              </div>

              <BlogPreview />
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="py-20 bg-black text-white">
            <div className="container text-center space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Become a CEO Couple?</h2>
              <p className="text-xl text-gray-300">
                Book a free 30-minute strategy call to discuss how we can help you build wealth together.
              </p>
              <Button className="bg-[#de1126] hover:bg-[#de1126]/90 text-lg px-8 py-6 h-auto animate-pulse">
                Book Your Free Call
              </Button>
            </div>
          </section>
        </AnimatedSection>

        {/* Social Media Section */}
        <AnimatedSection>
          <section id="contact" className="py-20 bg-white">
            <div className="container">
              <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm">
                  Connect With Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Follow Our Journey</h2>
                <p className="text-lg text-gray-700">
                  Join our community and stay updated with our latest content, tips, and insights.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="#"
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#de1126] text-white hover:bg-[#de1126]/90 transition-colors hover:scale-110 transform duration-200"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#de1126] text-white hover:bg-[#de1126]/90 transition-colors hover:scale-110 transform duration-200"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#de1126] text-white hover:bg-[#de1126]/90 transition-colors hover:scale-110 transform duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#de1126] text-white hover:bg-[#de1126]/90 transition-colors hover:scale-110 transform duration-200"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-[#de1126] text-white hover:bg-[#de1126]/90 transition-colors hover:scale-110 transform duration-200"
                >
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>

              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-6">Join Our Newsletter</h3>
                <div className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button className="bg-[#de1126] hover:bg-[#de1126]/90">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <footer className="border-t py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/tec-logo.png"
                  alt="The Entrepreneur Couple"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-sm text-gray-600">
                Helping entrepreneur couples build wealth, scale their brands, and multiply their income—without
                sacrificing their relationship.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-gray-600 hover:text-[#de1126]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#ceo-couple" className="text-sm text-gray-600 hover:text-[#de1126]">
                    CEO Couple
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-sm text-gray-600 hover:text-[#de1126]">
                    How We Help
                  </Link>
                </li>
                <li>
                  <Link href="#media" className="text-sm text-gray-600 hover:text-[#de1126]">
                    Media
                  </Link>
                </li>
                <li>
                  <Link href="#book" className="text-sm text-gray-600 hover:text-[#de1126]">
                    Our Book
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#blog" className="text-sm text-gray-600 hover:text-[#de1126]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                    LyBsyN Podcast
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                    Free Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                    hello@theentrepreneurcouple.com
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                    Book a Call
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} The Entrepreneur Couple. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#de1126]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <StickyCta />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
    </div>
  )
}

