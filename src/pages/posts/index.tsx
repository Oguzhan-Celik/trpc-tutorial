import { trpc } from "../../utils/trpc";
import Link from "next/link";

function PostListingPage() {
  const { data, isLoading } = trpc.useQuery(["posts.posts"]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="bottomBtn">
        <Link href="/posts/new">Create post</Link>
      </div>

      {data?.map((post) => {
        return (
          <article key={post.id}>
            <p>{post.title}</p>
            <Link href={`/posts/${post.id}`}>Read post</Link>
          </article>
        );
      })}
    </div>
  );
}

export default PostListingPage;
