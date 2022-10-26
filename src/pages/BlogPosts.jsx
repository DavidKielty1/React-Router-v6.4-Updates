import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <Fragment>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </Fragment>
  );
}

export default BlogPostsPage;

export function loader() {
  return getPosts();
}
