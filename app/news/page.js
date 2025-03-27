import Link from "next/link";

export default function News({ params }) {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/first">First New Item </Link>
          <Link href="/news/second">Second New Item </Link>
          <Link href="/news/third">Third New Item </Link>
        </li>
      </ul>
    </>
  );
}
