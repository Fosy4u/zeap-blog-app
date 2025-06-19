"use client";

import zeapApiSlice from "../../redux/services/zeapApi.slice";

import { BlogPostInterface } from "../../interface/interface";
import { Alert } from "flowbite-react";
import PostCard from "@/components/Post/PostCard";
import Skeleton from "@/components/loading/Skeleton";

const HomePosts = () => {
  const postsQuery = zeapApiSlice.useGetBlogPostsQuery({});
  const isLoading = postsQuery.isLoading;
  const posts = postsQuery?.data?.data;

  return (
    <div>
      {posts?.length === 0 && postsQuery.status === "fulfilled" && (
        <div className="w-full flex items-center justify-center my-16">
          <Alert className="w-100 " color="info">
            You have no &quot;<strong>{status}</strong>&quot; posts yet.
          </Alert>
        </div>
      )}
      {isLoading && (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:mt-8">
        {posts?.length > 0 &&
          posts
            .slice(0, 20)
            .map((post: BlogPostInterface) => (
              <PostCard post={post} key={post._id} />
            ))}
      </div>
    </div>
  );
};

export default HomePosts;
