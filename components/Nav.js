import React, { useState } from "react";
import { useRouter } from "next/router";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useStateContext } from "../context/StateContext";
import { useSession, signIn, signOut } from "next-auth/react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantities } = useStateContext();
  const router = useRouter();
  const { data: session } = useSession();

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-100">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div
                  className="flex cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-rose-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                    />
                  </svg>

                  <h1 className="text-white pl-1">
                    {" "}
                    Eureka<span className="text-rose-400">Breath</span>
                  </h1>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    onClick={() => router.push("/")}
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    Home
                  </a>

                  <a
                    onClick={() => router.push("/product/air-humidifier")}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    Buy Now
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    About Us
                  </a>
                  <a
                    onClick={!session ? signIn : signOut}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    {session ? `Hello, ${session.user.name}` : `Sign In`}
                  </a>
                  <a
                    href="#"
                    onClick={() => router.push("/checkout")}
                    className="flex items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  >
                    <p>Cart Item ({totalQuantities})</p>
                    <ShoppingCartIcon className="ml-2 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={handleNav}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            isOpen
              ? `fixed left-0 top-0 w-[35%] border-r border-r-gray-900 h-full bg-gray-800 ease-in-out duration-500 z-100 md:hidden`
              : "fixed left-[-100%]"
          }
        >
          <div className="flex pt-5 pl-5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-rose-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
              />
            </svg>
            <h1 className="text-white pl-1">
              {" "}
              Eureka<span className="text-rose-400">Breath</span>
            </h1>
          </div>

          <ul className="pt-5 uppercase">
            <li
              onClick={() => router.push("/")}
              className="p-4 cursor-pointer hover:bg-gray-700 text-white  rounded-md text-sm font-medium border-b border-gray-600"
            >
              Home
            </li>
            <li
              onClick={() => router.push("/product/air-humidifier")}
              className="p-4 cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium border-b border-gray-600"
            >
              Buy Now
            </li>
            <li className="p-4 cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium border-b border-gray-600">
              About Us
            </li>
            <li
              onClick={!session ? signIn : signOut}
              className="p-4 cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium border-b border-gray-600"
            >
              {session ? `Hello, ${session.user.name}` : `Sign In`}
            </li>
            <li
              className="flex items-center p-4  cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium border-b border-gray-600"
              onClick={() => router.push("/checkout")}
            >
              <p>Cart Item ({totalQuantities})</p>
              <ShoppingCartIcon className="ml-2 w-5" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
