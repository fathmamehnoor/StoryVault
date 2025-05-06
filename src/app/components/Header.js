import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="w-full flex flex-col sm:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-0">StoryVault</h1>
        <div className="space-x-0 sm:space-x-6 space-y-2 sm:space-y-0 flex flex-col sm:flex-row items-center">
          <Link href="/" className="text-white hover:text-blue-300">Home</Link>
          <Link href="/about" className="text-white hover:text-blue-300">About</Link>
        </div>
      </nav>
    </header>
  );
}
