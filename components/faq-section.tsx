"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the CEO Couple framework?",
    answer:
      "The CEO Couple framework is our proven system that helps couples align their vision, purpose, and goals to build successful businesses together while strengthening their relationship. It covers relationship dynamics, business strategy, financial management, and time optimization specifically designed for entrepreneur couples.",
  },
  {
    question: "How is CWA different from other business coaching programs?",
    answer:
      "Unlike traditional business coaching that focuses solely on business growth, Couple Wealth Academy addresses both your business and relationship needs. We understand the unique challenges entrepreneur couples face and provide strategies to help you thrive in both areas simultaneously, with a community of like-minded couples supporting your journey.",
  },
  {
    question: "We're not sure if we want to work together. Can CWA still help us?",
    answer:
      "Many couples in CWA run separate businesses or have one partner who works a 9-5 while the other builds a business. We help you align your goals and support each other's dreams, whether you're building something together or separately.",
  },
  {
    question: "How much time do we need to commit to see results?",
    answer:
      "Most couples see significant improvements in their relationship and business within 90 days when following our framework. We recommend setting aside 3-5 hours per week for implementation and attending our weekly coaching calls. Our system is designed to help you work smarter, not harder.",
  },
  {
    question: "What happens after we join CWA?",
    answer:
      "After joining, you'll get immediate access to our online portal with all course materials, frameworks, and resources. You'll be invited to our private community, receive your welcome package, and book your onboarding call where we'll help you create your personalized 90-day action plan.",
  },
  {
    question: "How much does it cost to join CWA?",
    answer:
      "Investment in CWA varies depending on the level of support and coaching you need. We offer several options ranging from our self-paced digital program to our high-touch coaching experience. The best way to learn about current pricing is to book a free strategy call where we can discuss which option is right for you.",
  },
]

export function FaqSection() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded-lg mb-4 px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-medium py-5 hover:no-underline">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-5">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

