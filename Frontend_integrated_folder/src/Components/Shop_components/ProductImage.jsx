export default function ProductImage({ src, alt, inStock, featured }) {
  return (
    <div className="relative h-48 bg-gray-100 flex items-center justify-center">
      <img src={src} alt={alt} className="h-full w-full object-contain" />

      {featured && (
        <div className="absolute bottom-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          A
        </div>
      )}
    </div>
  );
}
