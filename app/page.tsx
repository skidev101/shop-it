import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

export default async function Home() {
  // const products = await getProducts();
  // const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Quality Products for Your Lifestyle
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Shop the latest trends in electronics, fashion, and home
                  goods. Experience seamless shopping with ShopIt.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full min-[400px]:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            {/* Placeholder for Hero Image - using a div for now or an image if available */}
            <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
              <img
                alt="Hero"
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Featured Products
          </h2>
          <Link href="/products">
            <Button variant="ghost">View All &rarr;</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join the ShopIt Community
          </h2>
          <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
            Sign up for our newsletter to get exclusive deals, new arrivals, and
            more.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
