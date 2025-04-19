import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Brand story"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, ELEGANCE was born from a passion for creating timeless fashion that transcends seasons
              and trends. Our founder, inspired by the elegant simplicity of European design, set out to create a brand
              that celebrates craftsmanship and quality.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we continue to craft each piece with meticulous attention to detail, using only the finest
              materials sourced from around the world. Our commitment to sustainable and ethical fashion practices
              guides everything we do.
            </p>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
