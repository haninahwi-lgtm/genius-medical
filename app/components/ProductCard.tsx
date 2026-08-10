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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-purple-700">
          {name}
        </h3>

        <p className="mt-3 text-gray-600 flex-1">
          {description}
        </p>

        <Link
          href={link}
          className="mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold text-center transition"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}