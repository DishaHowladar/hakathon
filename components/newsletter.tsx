import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter to receive exclusive updates on new collections, special offers, and fashion
            inspiration.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-gray-700"
              required
            />
            <Button type="submit" className="bg-white text-black hover:bg-white/90 whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}
