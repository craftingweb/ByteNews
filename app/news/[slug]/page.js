import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage({ params }) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} />
        <h1>{newsItem.title}</h1>
        <time>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
