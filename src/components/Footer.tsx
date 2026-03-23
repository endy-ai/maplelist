import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">🍁</span>
              <span className="text-lg font-bold tracking-tight">
                Maple<span className="text-maple">List</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Discover and support Canadian-made products. Buy local, buy
              Canadian.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Browse Products
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Canadian Alternatives
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">For Brands</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-gray-700">
                  List Your Brand
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Brand Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li>
                <Link href="#" className="hover:text-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-700">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MapleList. Made with 🍁 in Canada.
        </div>
      </div>
    </footer>
  );
}
