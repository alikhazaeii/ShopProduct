import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoadingComponent({ params, data }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 100); 

    return () => clearInterval(interval); 
  }, []);

  if (!params || !data) {
    return (
      <main className="w-full flex flex-wrap justify-center items-center h-[100vh]">
        <figure className="">
          <Image
            width={200}
            height={200}
            src="/iphonelogo.png"
            alt="loading..."
          />
          <figcaption className="w-full text-center h-[10px] border rounded-3xl mt-4">
            <div
              className="h-full bg-black rounded-3xl transition-all duration-500"
              style={{ width: `${progress}%` }} 
            ></div>
          </figcaption>
        </figure>
      </main>
    );
  }

  return null; 
}
