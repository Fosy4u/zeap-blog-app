"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import InstagramLogo from "../../../public/icons/InstagramLogo";
import FacebookLogo from "../../../public/icons/FacebookLogo";
import MenuIcon from "../../../public/icons/MenuIcon";
import Shop from "../Header/Shop";
import XLogo from "../../../public/icons/XLogo";

export default function Menu({ menuTags = [] }: { menuTags?: string[] }) {
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className="relative">
        <button
          type="button"
          aria-label="Hamburger Menu"
          onClick={openModal}
          className="focus:outline-none"
        >
          <MenuIcon />
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen">
            <Transition.Child as={Fragment}>
              <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-linear duration-600"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-linear duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div
                style={{ height: "100vh" }}
                className="relative opacity-95 overflow-y-auto inline-block dur h-screen w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
              >
                <div className="flex justify-between items-center p-6 pb-0">
                  <Link href="/">
                    <Image
                      className="justify-center"
                      src="/bg-img/zeap-text-logo.png"
                      alt="Zeaper Logo"
                      width={85}
                      height={22}
                    />
                  </Link>
                  <button
                    type="button"
                    className="outline-none focus:outline-none text-3xl sm:text-2xl"
                    onClick={closeModal}
                  >
                    &#10005;
                  </button>
                </div>

                <div className="mb-10">
                  <div className="itemContainer px-6 w-full flex flex-col justify-around items-center gap-2">
                    {menuTags.map((tag: string) => (
                      <Link key={tag} href={`/tags?tag=${tag}`}>
                        {tag}
                      </Link>
                    ))}
                    <hr className="w-full my-4 border-gray-300" />
                    <Shop />
                    <hr className="w-full my-4 border-gray-300" />

                    <div className="  lg:hidden">
                      <div className="flex justify-between app-max-width">
                        <ul className={`flex topLeftMenu`}>
                          <li>
                            <a
                              href="https://www.facebook.com/share/14qdYwyjnX/"
                              aria-label="Haru Fashion Facebook Page"
                            >
                              <FacebookLogo extraClass={"w-6 h-6"} />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/officialzeaper?igsh=MXRmc3FmM2IwMHAyMg=="
                              aria-label="Haru Fashion Instagram Account"
                            >
                              <InstagramLogo extraClass={"w-6 h-6"} />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://x.com/officialzeaper?t=kWez4V6EaElzI38nK_NIbg&s=09"
                              aria-label="Haru Fashion Instagram Account"
                            >
                              <XLogo extraClass={"w-6 h-6"} />
                            </a>
                          </li>
                          <li>
                            <a className="text-[16px] " href="about">
                              About Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
