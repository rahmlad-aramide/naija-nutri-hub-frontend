import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>Take a picture of your food, Learn it. Make it.</h1>
      </header>
      <main>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
      </main>
    </>
  );
}
