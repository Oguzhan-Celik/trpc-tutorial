import Error from "next/error";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Link from "next/link";

function SinglePostPage() {
  const router = useRouter();

  const postId = router.query.postId as string;

  const { data, isLoading } = trpc.useQuery(["posts.single-post", { postId }]);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (!data) {
    return <Error statusCode={404} />;
  }

  return (
    <div>
      <div className="bottomBtn">
        <Link href="/posts">Read posts</Link>
        <Link href="/posts/new">Create post</Link>
      </div>
      <div className="posts">
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
      </div>
    </div>
  );
}

export default SinglePostPage;
