import Post from "./components/Post";

const PostPage = async ({
  params,
}: {
  params: Promise<{
    blogPostId: string;
  }>;
}) => {
  const { blogPostId } = await params;

  return (
    <div className="p-4 py-6 lg:pb-28 container mx-auto">
      {blogPostId && <Post blogPostId={blogPostId.replaceAll("-", "/")} />}
    </div>
  );
};

export default PostPage;
