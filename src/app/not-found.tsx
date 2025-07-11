
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="container">
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-24">
        {/* <h1
          className="text-[100px] font-extrabold text-primary"
          style={{ lineHeight: "1em" }}
        >
          404
        </h1> */}
        <Image
          src="/404.svg"
          alt="404 Page Not Found"
          width={400}
          height={300}
        />
        <h4 className="text-4xl font-semibold">Page Not Found</h4>
        <p className="text-neutral-500">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-5">
          <ButtonPrimary
            href="/"
            className="border-2 border-primary text-primary"
          >
            Go Home
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
