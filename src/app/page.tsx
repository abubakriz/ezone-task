import Link from "next/link";

export default async function Home() {
  return (
    <div className="container">
      <Link href="/products/5516" className="py-4">
        صفحة المنتج
      </Link>
    </div>
  );
}
