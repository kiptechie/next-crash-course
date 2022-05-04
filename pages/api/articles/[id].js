import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const article = articles.find((article) => article.id === id);
  res.setHeader("Content-Type", "application/json");
  if (article !== undefined) {
    res.statusCode = 200;
    res.end(JSON.stringify(article));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: `Article with id ${id} not found` }));
  }
}
