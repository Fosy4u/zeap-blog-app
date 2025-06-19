import Image from "next/image";
import Link from "next/link";
import AppHeader from "@/components/Header/AppHeader";

const NoPost = () => {
  return (
    <>
      <AppHeader title="No Article!" />
      <div className="flex flex-col  justify-center items-center">
        <h1 className="text-3xl tracking-wider leading-10">Sorry!</h1>
        <h2 className="text-2xl text-slate-500 mt-2">
          No article match your search criteria.
        </h2>
        <Image
          src="/bg-img/coding.svg"
          alt="Not created yet"
          width={400}
          height={300}
        />
        <span className="text-slate-400">
          Go back to the{" "}
          <Link className="underline font-bold hover:text-slate-500" href="/">
            home page
          </Link>
          ?
        </span>
      </div>
    </>
  );
};

export default NoPost;
