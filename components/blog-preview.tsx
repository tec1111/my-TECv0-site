import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Communication Strategies for Entrepreneur Couples",
    excerpt:
      "Discover the essential communication techniques that have helped hundreds of couples navigate the unique challenges of building a business together.",
    image: "/images/couple-casual.png",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    slug: "communication-strategies-entrepreneur-couples",
  },
  {
    id: 2,
    title: "How We Went from $0 to $100K in 90 Days as a Couple",
    excerpt:
      "Learn the exact steps we took to build our first six-figure business together and how you can apply these principles to your own journey.",
    image: "/images/couple-formal.png",
    date: "Feb 28, 2025",
    readTime: "12 min read",
    slug: "zero-to-100k-90-days",
  },
  {
    id: 3,
    title: "Creating a Vision Board That Actually Works for Couples",
    excerpt:
      "Vision boards are powerful tools when done right. Here's our step-by-step process for creating a joint vision board that aligns your goals and dreams.",
    image: "/images/couple-casual.png",
    date: "Feb 10, 2025",
    readTime: "6 min read",
    slug: "vision-board-couples",
  },
]

export function BlogPreview() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#de1126] transition-colors">{post.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>
                <div className="text-[#de1126] font-medium inline-flex items-center">
                  Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button className="bg-[#de1126] hover:bg-[#de1126]/90">View All Articles</Button>
      </div>
    </div>
  )
}

