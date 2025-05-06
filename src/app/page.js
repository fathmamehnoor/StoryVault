import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Background image with blur */}
      <section
        className="pt-24 px-6"
        style={{
          backgroundImage: 'url("/assets_task_01jthr102zfs8ac06nte4pfvzh_1746499898_img_0.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          filter: "blur(10px)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">Welcome to StoryVault</h1>
        <p className="mt-4 text-xl text-white drop-shadow-sm">Your platform for amazing stories.</p>
        <Link href="/signup">
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg">
            Sign Up
          </button>
        </Link>
      </div>
    </>
  );
}

