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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Product Image */}
      <div className="w-full h-64 bg-white flex items-center justify-center p-4">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Information */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-2xl font-bold text-purple-700">
          {name}
        </h3>

        <p className="mt-3 text-gray-600 leading-7 flex-1">
          {description}
        </p>

        {/* Portfolio Button */}
        <Link
          href={link}
          className="mt-6 inline-block border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white py-3 px-6 rounded-xl font-semibold text-center transition"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}