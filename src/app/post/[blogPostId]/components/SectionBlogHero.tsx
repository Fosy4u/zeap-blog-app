import type { FC } from "react";
// import ReactTimeAgo from "react-time-ago";
import Image from "next/image";

interface SectionBlogHeroProps {
  coverImage: string;
  title: string;
  tags?: string[];
  postdate: Date;
}

const SectionBlogHero: FC<SectionBlogHeroProps> = ({
  coverImage,
  title,
  tags,
  postdate,
}) => {
  console.log("SectionBlogHero", coverImage, title, tags, postdate);
  return (
    <div className="">
      {title && <p className="text-2xl font-medium uppercase ">{title}</p>}
      <span>
        {/* <ReactTimeAgo
          date={postdate}
          className="text-slate-500 dark:text-slate-400 text-sm"
        /> */}
      </span>
      <div className="flex flex-wrap gap-2 my-4">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={coverImage}
          alt={title}
          width={800}
          height={400}
          loading="lazy"
          className="w-full h-auto    mb-4 lg:w-1/2 rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default SectionBlogHero;
