import Link from 'next/link';
import { getProducts } from '@/lib/api';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 space-y-6">
            <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-col gap-2">
                {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                         <Link href={`/products?category=${category}`} className="text-sm hover:underline text-muted-foreground hover:text-foreground">
                            {category}
                         </Link>
                    </div>
                ))}
            </div>
            </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <span className="text-sm text-muted-foreground">{products.length} products</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
