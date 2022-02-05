import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1);
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className="not-found">
      <h1>Sorry, can't find that page!</h1>
      <h2>
        <span>
          Wait 3 seconds or
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </span>
      </h2>
    </div>
  );
};

export default NotFound;
