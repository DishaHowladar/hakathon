import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Silk Blend Dress",
    price: 189.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Dresses",
    isNew: true,
  },
  {
    id: 2,
    name: "Tailored Wool Blazer",
    price: 249.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 159.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Knitwear",
    isNew: false,
  },
  {
    id: 4,
    name: "Leather Ankle Boots",
    price: 219.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Footwear",
    isNew: true,
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="group overflow-hidden border-0 shadow-sm">
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {product.isNew && (
              <Badge className="absolute top-3 left-3 bg-black text-white hover:bg-black/90">New</Badge>
            )}
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-3 right-3 opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Bag
            </Button>
          </div>
          <CardContent className="pt-4">
            <div className="text-sm text-gray-500 mb-1">{product.category}</div>
            <Link href="#" className="font-medium hover:underline">
              {product.name}
            </Link>
          </CardContent>
          <CardFooter className="pt-0 text-lg font-semibold">${product.price.toFixed(2)}</CardFooter>
        </Card>
      ))}
    </div>
  )
}
