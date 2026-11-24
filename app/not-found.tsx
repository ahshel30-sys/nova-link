import Link from "next/link";
export default function NotFound() {
  return (
    <main className="not-found">
      <p className="mono-label">ERROR 404 / SIGNAL LOST</p>
      <h1>THIS ROUTE DOESN&apos;T <em>EXIST.</em></h1>
      <p>The page you requested is outside the network. Return to the main system.</p>
      <Link className="button button--solid" href="/">Return to NOVALINK</Link>
    </main>
  );
}
