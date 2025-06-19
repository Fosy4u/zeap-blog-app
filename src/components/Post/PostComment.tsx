import { Avatar } from "flowbite-react";

//import ReactTimeAgo from "react-time-ago";
import {
  BlogPostCommentInterface,
  BlogPostInterface,
} from "@/interface/interface";
import ReplyComment from "./ReplyComment";
import { useState } from "react";

const PostComment = ({
  comment,
  post,
  isChild = false,
}: {
  comment: BlogPostCommentInterface;
  post: BlogPostInterface;
  isChild?: boolean;
}) => {
  const childrenComments = comment?.childrenComments || [];
  const parentComment = comment?.parentComment || null;
  const parentFullName = parentComment?.fullName;
  const fullName = comment?.fullName || "Anonymous";
  const commentText = comment?.comment || "No comment provided";
  // first letter of each word in fullName
  const initials = fullName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  const date = comment?.createdAt;
  const [max, setMax] = useState(2);

  const changeView = () => {
    setMax((prevMax) => (prevMax === 2 ? 1000 : 2));
  };
  if (!comment) return null;
  return (
    <div className="flex flex-col bg-white  rounded-lg  mb-6">
      <div>
        <div className="flex items-start gap-4 mb-6">
          <Avatar
            alt={fullName}
            rounded={true}
            size="md"
            placeholderInitials={initials}
          />
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">{fullName}</span>
              {date && (
                <span className="text-xs text-gray-500">
                  {/* <ReactTimeAgo date={date} /> */}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700">
              <span className="text-info">{parentFullName}</span> {commentText}
            </p>
            {comment && <ReplyComment post={post} parentComment={comment} />}
            {childrenComments.length > 2 && (
              <button
                onClick={changeView}
                className="text-blue-500 text-sm mt-2"
              >
                {max === 2 ? "View more replies" : "View less replies"}
              </button>
            )}
            {childrenComments.length > 0 && (
              <div className="flex items-center mt-2">
                <span className="text-xs text-gray-500">
                  {childrenComments.length} reply
                  {childrenComments.length !== 1 ? "ies" : "y"}
                </span>
                {childrenComments.length > 2 && (
                  <span className="text-xs text-gray-500 ml-2">
                    {max === 2
                      ? `(${childrenComments.length - 2} hidden replies)`
                      : ""}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {!isChild ? (
        <>
          {childrenComments.length > 0 && (
            <div className="ml-2 pl-2  border-l border-gray-200">
              {childrenComments.slice(0, max).map((childComment) => (
                <PostComment
                  key={childComment._id}
                  comment={childComment}
                  post={post}
                  isChild={true}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {childrenComments.length > 0 && (
            <div className="">
              {childrenComments.map((childComment) => (
                <PostComment
                  key={childComment._id}
                  comment={childComment}
                  post={post}
                  isChild={true}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostComment;
