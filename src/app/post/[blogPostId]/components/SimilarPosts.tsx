import PostCard from "@/components/Post/PostCard";
import { BlogPostInterface } from "@/interface/interface";
import zeapApiSlice from "@/redux/services/zeapApi.slice";
import React from "react";

const SimilarPosts = ({ blogPostId }: { blogPostId: string }) => {
  const getSimilarBlogPostQuery = zeapApiSlice.useGetSimilarBlogPostQuery(
    { blogPostId },
    { skip: !blogPostId }
  );
  const similarPosts = getSimilarBlogPostQuery?.data?.data || [];
  return (
    <div>
      {similarPosts?.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Similar Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarPosts.slice(0, 6).map((post: BlogPostInterface) => (
              <PostCard post={post} key={post._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarPosts;
