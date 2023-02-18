import Image from "next/image";

export default function CategoryCard({ category }) {
  return (
    <div className="category-card border hover:border-gray-500 p-6 transition duration-200">
      <img
        src={`/images/cars/categories/${category}.png`}
        alt={category}
        className="mx-auto transition duration-300 ease-in-out object-cover h-16"
      />
      <h3 className="text-center font-bold capitalize mt-4 transition duration-200">
        {category}
      </h3>
    </div>
  );
}
