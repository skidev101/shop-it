import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { getProductById } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { AddToCartButton } from './add-to-cart-button';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-xl border bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">{product.category}</p>
          </div>

          <div className="flex items-center gap-4">
             <div className="flex items-center gap-0.5">
                {/* Star rating placeholder */}
                 {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
             </div>
             <span className="text-sm text-muted-foreground">({product.rating} / 5)</span>
          </div>

          <div className="text-4xl font-bold">${product.price.toFixed(2)}</div>

          <div className="prose prose-stone text-muted-foreground">
            <p>{product.description}</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <AddToCartButton product={product} />
            <Button variant="outline" size="lg">
              Add to Wishlist
            </Button>
          </div>

          <div className="grid gap-4 border-t pt-6 text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-green-500"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>In stock and ready to ship</span>
             </div>
             <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="M7 15h0" />
                  <path d="M2 9.5h20" />
                </svg>
                <span>Secure payment</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
