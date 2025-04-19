import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedProducts from "@/components/featured-products"
import Testimonials from "@/components/testimonials"
import BrandStory from "@/components/brand-story"
import Newsletter from "@/components/newsletter"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x"
          >
            ELEGANCE
          </Link>
          <div className="relative inline-block group">
      <span className="button-border pointer-events-none absolute inset-0 rounded-md z-0"></span>
    </div>
          <nav className="hidden md:flex items-center space-x-8">
            {['New Arrivals', 'Collections', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-white hover:text-rose-300 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex text-white hover:text-yellow-400">
              Sign In
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold shadow-md">
              Shop Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 md:pt-0 relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
        <iframe
  src="https://www.youtube.com/embed/LmZx9it1268?autoplay=1&mute=1&controls=0&loop=1&playlist=LmZx9it1268"
  className="w-full h-full object-cover brightness-75"
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">Redefine Your Style</h1>
            <p className="text-xl text-white/80 mb-8">
              Discover our new collection that blends timeless elegance with contemporary fashion trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-white hover:brightness-110 shadow-xl">
                Get Start
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 hover:backdrop-blur-sm transition"
              >
                Explore Brand
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link href="#" className="flex items-center text-sm font-medium hover:underline">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <FeaturedProducts />
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ELEGANCE</h3>
              <p className="text-gray-400 mb-4">
                Redefining fashion with timeless elegance and contemporary style since 2010.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 ELEGANCE. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
