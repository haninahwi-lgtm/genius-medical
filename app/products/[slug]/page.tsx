import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import AddToCartButton from "../../components/AddToCartButton";
import { products } from "../../data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Header />

        <main className="pt-36 text-center">
          <h1 className="text-5xl font-bold">
            Product Not Found
          </h1>

          <Link
            href="/products"
            className="mt-8 inline-block text-purple-700 font-semibold"
          >
            ← Back to Products
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pt-36 pb-20 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-8">

          <Link
            href="/products"
            className="text-purple-700 font-semibold"
          >
            ← Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 mt-8">

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative w-full h-[500px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>

              <h1 className="text-5xl font-bold text-purple-700">
                {product.name}
              </h1>

              <p className="mt-8 text-lg text-gray-600 leading-8">
                {product.description}
              </p>

              <p className="mt-8 text-3xl font-bold text-purple-700">
                {product.price}
              </p>

              <div className="flex gap-5 mt-12">

                <AddToCartButton
                  slug={product.slug}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />

                <button className="border border-purple-700 text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 hover:text-white transition">
                  Contact Us
                </button>

              </div>

            </div>

          </div>

        </div>
      </main>
    </>
  );
}