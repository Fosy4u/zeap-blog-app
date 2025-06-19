import Link from "next/link";
import React from "react";
const env = process.env.ENV || "dev";
const Shop = ({ extraClass }: { extraClass?: string }) => {
  const url =
    env === "dev"
      ? process.env.NEXT_PUBLIC_ZEAPER_MARKETPLACE_DEV
      : process.env.NEXT_PUBLIC_ZEAPER_MARKETPLACE_PROD;
  return (
    <Link
      href={url || "https://zeaper.com"}
      target="_blank"
      className={`bg-baseGreen text-white px-4 py-2 rounded-full hover:bg-baseGreen/80 transition-colors duration-300 ${extraClass}`}
      rel="noopener noreferrer"
      title="Zeaper Marketplace"
    >
      Shop from Zeaper
    </Link>
  );
};

export default Shop;
