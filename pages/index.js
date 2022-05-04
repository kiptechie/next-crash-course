import ArticleList from "../components/ArticleList";
import { server } from "../config/index";

export default function Home({ articles }) {
  return <ArticleList articles={articles} />;
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
