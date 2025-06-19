"use client";
import zeapApiSlice from "../../../../redux/services/zeapApi.slice";

import { Badge } from "flowbite-react";
import Loading from "@/app/loading";
import PostDetail from "./PostDetail";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

const Post = ({ blogPostId }: { blogPostId: string }) => {
  console.log("Post component rendered with blogPostId:", blogPostId);

  const getPostQuery = zeapApiSlice.useGetBlogPostQuery(
    { blogPostId: blogPostId as string },
    { skip: !blogPostId }
  );
  const post = getPostQuery?.data?.data;

  const isFulfilled = getPostQuery?.status === "fulfilled";

  const isLoading = getPostQuery.isLoading;
  
  return (
    <div>
      {isLoading && <Loading />}
      {isFulfilled && !post && (
        <div className="flex justify-center items-center h-screen">
          <Badge color="info" size="xl" className="w-fit p-2 px-4">
            Post not found
          </Badge>
        </div>
      )}

    
      {post && <PostDetail post={post} />}
    </div>
  );
};

export default Post;
