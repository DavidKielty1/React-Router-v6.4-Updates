import { useLoaderData } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const postData = useLoaderData();

  return (
    <section>
      <BlogPost title={postData.title} text={postData.body} />
    </section>
  );
}

export default PostDetailPage;

export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}
