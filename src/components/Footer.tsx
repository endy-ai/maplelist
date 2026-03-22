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
              The home for Canadian startups, talent, and investors.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-700">Startups</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Jobs</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Talent</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-700">About</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Careers</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-gray-700">Privacy</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Terms</Link></li>
              <li><Link href="#" className="hover:text-gray-700">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MapleList. Made with 🍁 in Canada.
        </div>
      </div>
    </footer>
  );
}
