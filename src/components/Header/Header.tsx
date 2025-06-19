"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import AppHeader from "./AppHeader";

import Menu from "../Menu/Menu";

import zeapApiSlice from "@/redux/services/zeapApi.slice";
import TopNav from "./TopNav";
import Shop from "./Shop";
import SearchIcon from "../../../public/icons/SearchIcon";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const getPublishedTagsQuery = zeapApiSlice.useGetPublishedTagsQuery({});
  const tags = getPublishedTagsQuery?.data?.data || [];

  // only 5 for menu tags
  const menuTags = tags.slice(0, 4);
  // Calculate Number of Wishlist

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;

    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    console.log("useEffect called", window);
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [handleScroll]);

  return (
    <>
      {/* ===== <head> section ===== */}
      <AppHeader title={title} />
      <TopNav />
      {/* ===== Main Navigation ===== */}
      <nav
        id="mainNav"
        className={`${
          scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
        } w-full z-50 h-100 relative `}
      >
        <div className="app-max-width w-full container mx-auto">
          <div
            className={`flex justify-between align-baseline app-x-padding mainMenu`}
          >
            {/* Hamburger Menu and Mobile Nav */}
            <div className="flex-1 lg:flex-0 lg:hidden">
              <Menu menuTags={menuTags} />
            </div>

            {/* Left Nav */}
            <ul className={`flex-0 lg:flex-1 flex leftMenu`}>
              {menuTags.map((tag: string) => (
                <li
                  key={tag}
                  className="text-gray500 hover:text-gray900 h-[10rem"
                >
                  <Link href={`/tags?tag=${tag}`}>{tag}</Link>
                </li>
              ))}
            </ul>

            {/* Haru Logo */}
            <div className=" flex justify-center items-center cursor-pointer">
              <div className="w-32  h-auto rounded-md overflow-hidden">
                {/* <Link
                  style={{
                    fontFamily: "serif",
                  }}
                  href="/"
                  className="font-bold text-xl"
                >
                  Zeaper
                </Link> */}

                <Link href="/">
                  {/* <Image
                    className="justify-center"
                    //src="/zeap-green.png"
                    src="/bg-img/zeap-text-logo-whiteBg.jpg"
                    // src="/logo.svg"
                    alt="zeap logo"
                    width={316}
                    height={73}
                    layout="responsive"
                  /> */}
                  <span className="flex justify-center items-center bg-white  rounded-md lg:hidden p-1">
                    <Image
                      className="justify-center "
                      //src="/zeap-green.png"
                      src="/bg-img/zeap-text-logo.png"
                      // src="/logo.svg"
                      alt="zeap logo"
                      width={316}
                      height={73}
                      layout="responsive"
                    />
                  </span>
                  <span className=" hidden lg:block">
                    <Image
                      className="justify-center "
                      //src="/zeap-green.png"
                      src="/bg-img/zeap-text-logo.png"
                      // src="/logo.svg"
                      alt="zeap logo"
                      width={316}
                      height={73}
                      layout="responsive"
                    />
                  </span>
                  {/* <span className="text-white text-center font-extrabold text-3xl">
                    ZEAPER
                  </span> */}
                </Link>
              </div>
            </div>

            {/* Right Nav */}
            <ul className={`flex-1 flex gap-4 justify-end lg:rightMenu`}>
              <li>
                <Link href="/search">
                  <SearchIcon />
                </Link>
              </li>
              <li className="hidden lg:block">
                <Shop />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
