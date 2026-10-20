
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  image: string;
  description: string;
  link: string;
};

export default function ProductCard({
  name,
  image,
  description,
  link,
}: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-56 w-full items-center justify-center bg-white p-5 sm:h-60">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="h-full w-full object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-snug text-purple-700 sm:text-2xl">
          {name}
        </h3>

        <p className="mt-3 flex-1 leading-7 text-gray-600">
          {description}
        </p>

        {/* Product Details Button */}
        <Link
          href={link}
          className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-purple-700 px-5 py-3 text-center font-semibold text-purple-700 transition-colors hover:bg-purple-700 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
