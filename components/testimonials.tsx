import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma Thompson",
    location: "New York, NY",
    rating: 5,
    text: "The quality of ELEGANCE clothing is exceptional. I've been a loyal customer for years and have never been disappointed. Their attention to detail and commitment to sustainability sets them apart.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I discovered ELEGANCE last year and it has completely transformed my wardrobe. Their pieces are timeless yet modern, and the craftsmanship is unmatched. Worth every penny.",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    location: "Chicago, IL",
    rating: 4,
    text: "ELEGANCE offers the perfect balance of style and comfort. Their customer service is also outstanding - they went above and beyond to help me find the perfect size.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to have earned the trust and loyalty of fashion enthusiasts around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
