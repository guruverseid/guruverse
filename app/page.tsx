import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-auto min-h-screen overflow-y-scroll">
      <div className="flex justify-center items-center">
        <img src={"/images/comming_soon.avif"} className="h-screen w-auto" />

      </div>
    </div>
  );
}
