import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry, can't find that page!</h1>
      <h2>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
