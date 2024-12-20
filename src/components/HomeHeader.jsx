import Link from "next/link";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <BsFillGrid3X3GapFill className="bg-transparent hover:bg-gray-200 hover:rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}
