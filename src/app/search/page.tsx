"use client";

import zeapApiSlice from "../../redux/services/zeapApi.slice";

import { BlogPostInterface } from "../../interface/interface";
import PostCard from "@/components/Post/PostCard";
import Skeleton from "@/components/loading/Skeleton";
import NoPost from "../tags/components/NoPost";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const [input, setInput] = useState("");
  const postsQuery = zeapApiSlice.useGetBlogPostsQuery({});
  const posts = postsQuery?.data?.data;
  const isLoading = postsQuery.isLoading;
  const isFulfilled = postsQuery.status === "fulfilled";
  const noResults = isFulfilled && posts?.length === 0;

  const escapeRegExp = (value: string) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  const searchRegex = new RegExp(escapeRegExp(input), "i");
  // recursive search function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const search = (item: any) => {
    let found = false;

    if (typeof item === "string") {
      if (searchRegex.test(item?.toString())) {
        found = true;
        return found;
      }
    }

    if (typeof item === "object" && item !== null) {
      Object.keys(item).forEach((key) => {
        const value = item[key];
        const match = search(value);
        if (match) {
          found = true;
          return found;
        }
      });
    }
    return found;
  };

  useEffect(() => {
    if (posts?.length > 0) {
      const result = posts?.filter((row: BlogPostInterface) => {
        const keys = Object.keys(row);
        return keys.some((field) => {
          return search(row[field as keyof BlogPostInterface]);
        });
      });

      return setFilteredPosts(result);
    }
    return setFilteredPosts([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, posts]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 lg:justify-center lg:flex items-center w-full ">
        <div className="relative w-full lg:w-1/2">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none w-full">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search articles..."
            required
            value={input || ""}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Search
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-6">
        {input ? `Search Results for "${input}"` : "Search Posts"}
      </h1>
      {noResults && (
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
        {filteredPosts?.length > 0 &&
          filteredPosts.map((post: BlogPostInterface) => (
            <PostCard post={post} key={post._id} />
          ))}
      </div>
    </div>
  );
};

export default SearchPage;
