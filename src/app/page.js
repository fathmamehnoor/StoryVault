import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section
      className="pt-24 px-6"
      style={{
        backgroundImage: 'url("/assets_task_01jthr102zfs8ac06nte4pfvzh_1746499898_img_0.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", 
        filter: "blur(10px)",
      }}
      >
      </section>
    </>
  );
}

