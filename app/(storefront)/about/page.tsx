export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12 max-w-3xl mx-auto space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter">About ShopIt</h1>
        <p className="text-xl text-muted-foreground">
          We are dedicated to providing the best products with an exceptional shopping experience.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          At ShopIt, our mission is simple: to bring high-quality, sustainable, and stylish products directly to your doorstep. We believe that shopping should be easy, enjoyable, and transparent. We carefully curate our collection to ensure that every item meets our high standards for craftsmanship and durability.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Curated selection of premium products.</li>
            <li>Fast and reliable shipping.</li>
            <li>Dedicated customer support team.</li>
            <li>Secure and seamless checkout process.</li>
        </ul>
      </div>
    </div>
  );
}
