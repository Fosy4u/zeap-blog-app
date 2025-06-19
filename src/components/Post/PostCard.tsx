import { HiArrowRight } from "react-icons/hi2";
import NoPic from "@/images/noPhoto.png";
import Link from "next/link";
import Image from "next/image";
import { BlogPostInterface } from "@/interface/interface";

const PostCard = ({ post }: { post: BlogPostInterface }) => {
  const removeHtmlTags = (text: string) => {
    return text.replace(/<[^>]*>/g, "");
  };
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };
  const formatPostContent = (content: string) => {
    const cleanedContent = removeHtmlTags(content);
    return truncateText(cleanedContent, 50);
  };
  return (
    <Link
      key={post.blogPostId}
      href={`/post/${post.blogPostId}`}
      className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden"
    >
      <Image
        src={post.image?.link || NoPic}
        alt=""
        width={500}
        height={300}
        className="w-full h-50 object-cover object-center"
        loading="lazy"
      />
      <div className="content p-6">
        <div className="text-lg hover:text-green-600 dark:text-white dark:hover:text-green-600 transition-all duration-500 ease-in-out font-medium">
          {post.title}
        </div>
        <p className="text-slate-400 mt-3">{formatPostContent(post.content)}</p>

        <div className="mt-5">
          <span className="btn btn-link p-2 rounded-md hover:text-white dark:hover:text-green-900 after:bg-green-900 dark:text-white ease-in duration-300 hover:bg-baseGreen ">
            Read More <HiArrowRight className="inline-block ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
