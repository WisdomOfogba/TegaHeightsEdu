// app/not-found.tsx
export default function NotFound() {
  return (
    <div className=" bg-gray-100">
      <div className="container h-[500px] mx-auto p-6 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-4">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
    </div>
  );
}
