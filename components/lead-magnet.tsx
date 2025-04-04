import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Check } from "lucide-react"

export function LeadMagnet() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#de1126]/10 text-[#de1126] font-medium text-sm mb-4">
            FREE RESOURCE
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4">The CEO Couple Blueprint: From Conflict to Cashflow</h3>

          <p className="text-lg text-gray-700 mb-6">
            Get our step-by-step guide to transforming relationship challenges into business opportunities.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#de1126] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Conflict resolution frameworks that strengthen your relationship</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#de1126] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Communication scripts for difficult business conversations</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-[#de1126] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Goal-setting templates for aligning your vision and purpose</p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <Input type="email" placeholder="Enter your email address" className="w-full" required />
            </div>
            <Button className="w-full bg-[#de1126] hover:bg-[#de1126]/90 flex items-center justify-center">
              <Download className="mr-2 h-4 w-4" /> Download Free Blueprint
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            We respect your privacy. You can unsubscribe anytime.
          </p>
        </div>

        <div className="order-1 md:order-2 relative min-h-[300px] md:min-h-full">
          <Image src="/images/couple-casual.png" alt="CEO Couple Blueprint" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
        </div>
      </div>
    </div>
  )
}

