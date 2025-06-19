"use client";

import zeapApiSlice from "../../redux/services/zeapApi.slice";

import { BlogPostInterface } from "../../interface/interface";
import PostCard from "@/components/Post/PostCard";
import Skeleton from "@/components/loading/Skeleton";
import { useSearchParams } from "next/navigation";
import NoPost from "./components/NoPost";


const TagsPage = () => {
  const params = useSearchParams();
  const tag = params.get("tag");
  const tags = [tag];
  const postsQuery = zeapApiSlice.useGetPublishedPostsByTagsQuery(
    {
      tags,
    },
    {
      skip: !tag, // Skip the query if tag is not provided
    }
  );
  const isLoading = postsQuery.isLoading;
  const posts = postsQuery?.data?.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {tag === "All" ? "All Topics" : tag}
      </h1>
      {posts?.length === 0 && postsQuery.status === "fulfilled" && (
        <div className="w-full flex items-center justify-center my-16">
          <NoPost />
        </div>
      )}
      {isLoading && (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
        {posts?.length > 0 &&
          posts.map((post: BlogPostInterface) => (
            <PostCard post={post} key={post._id} />
          ))}
      </div>
    </div>
  );
};

export default TagsPage;
