"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <div>
      <div className="h-screen w-full flex">
        <div className="w-2/3 bg-orange-200">Redirecting...</div>
      </div>
    </div>
  );
}
