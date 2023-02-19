import { useRouter } from "next/router";

function NewsDetailPage() {
  const router = useRouter();
  const { newsId } = router.query;

  return <p style={{ padding: "6rem" }}>Post: {newsId}</p>;
}
export default NewsDetailPage;
